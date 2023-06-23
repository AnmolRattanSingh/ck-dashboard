import { useEffect, useState } from 'react';
import { Header, PersonSelection } from '../components';
import { db } from '../config/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';

const NewRides = () => {
  const [loading, setLoading] = useState(true);
  const [riderData, setRiderData] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [selectedRider, setSelectedRider] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [driverMenuVisible, setDriverMenuVisible] = useState(false);

  const NewRidesRef = collection(db, 'NewRides');
  const NewDriversRef = collection(db, 'NewDrivers');

  const onClickEdit = async () => {
    try {
      await addDoc(NewRidesRef, {
        Name: 'Person 3 ',
        RouteLocs: 'New Route 2',
        accommodations: ['Accommodation 3', 'Accommodation 4'],
        tags: {
          status: 'pending',
        },
      });
      console.log('Document successfully written!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleRideClick = (ride) => {
    setSelectedRider(ride);
  };

  const handleDriverClick = (driver) => {
    setSelectedDriver(driver);
  };

  const handlePairClick = () => {
    setDriverMenuVisible(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const riderDataSnap = await getDocs(NewRidesRef);
        const driverDataSnap = await getDocs(NewDriversRef);
        const riderData = riderDataSnap.docs.map((doc, index) => ({
          ...doc.data(),
          id: doc.id,
          key: index,
        }));
        const driverData = driverDataSnap.docs.map((doc, index) => ({
          ...doc.data(),
          id: doc.id,
          key: index,
        }));
        setRiderData(riderData);
        setDriverData(driverData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // TODO: set outermost div to justify-evenly when sidebar is invisible
  return (
    <div className="m-2 md:m-10 mt-12 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Schedule" title="New Rides" />
      <div className="flex w-full">
        <PersonSelection
          riderData={riderData}
          handleMenuClick={handleRideClick}
          handlePairClick={handlePairClick}
          selectedPerson={selectedRider}
          loading={loading}
        />
        {driverMenuVisible && (
          <PersonSelection
            riderData={driverData}
            handleMenuClick={handleDriverClick}
            handlePairClick={handlePairClick}
            selectedPerson={selectedDriver}
            loading={loading}
            isDriver={true}
          />
        )}
      </div>
    </div>
  );
};

export default NewRides;
