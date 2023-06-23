import { EllipsisOutlined, SettingOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Tag, Avatar, Menu, Popconfirm, Button, Descriptions, Card, Space } from 'antd';
import { colorMaps } from '../data/dummy';


const PersonSelection = ({ riderData, handleMenuClick, handlePairClick, selectedPerson, loading, isDriver }) => {
    return (
        <div className="flex p-3">
            <div className='flex w-full p-5'>
                <Menu mode="vertical">
                    {riderData.map((ride, index) => (
                        <Menu.Item key={index} onClick={() => handleMenuClick(ride)}>
                            {ride.name}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div className='flex w-full'>
                {selectedPerson ? (
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={<img
                            alt="example"
                            src="https://northstar-pres.com/wp-content/uploads/2015/10/google-map-placeholder.png" />}
                        actions={[
                            <Button type="default" icon={<EllipsisOutlined />} className="mr-2">Edit</Button>,
                            <Button type="default" icon={<UsergroupAddOutlined />} className="mr-2" onClick={handlePairClick}>Pair</Button>,
                            <Popconfirm title="Are you sure?" okText="Yes" cancelText="No" okType='danger'>
                                <Button type="primary" danger>Delete</Button>
                            </Popconfirm>
                        ]}
                        loading={loading}
                    >
                        <Card.Meta title={selectedPerson.name} avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />} />
                        {isDriver ? (
                            <Descriptions>
                                <Descriptions.Item label="Accommodations" span={3}>
                                    {selectedPerson.accommodations}
                                    {console.log(selectedPerson)}
                                    {console.log(selectedPerson.accommodations )}
                                </Descriptions.Item>
                                <Descriptions.Item label="Availability" span={3}>
                                    {selectedPerson.availability}
                                </Descriptions.Item>
                            </Descriptions>

                        ) : (
                            <Descriptions>
                                <Descriptions.Item label="Route" span={3}>{selectedPerson.RouteLocs}</Descriptions.Item>
                                <Descriptions.Item label="Accommodations" span={3}>
                                    {selectedPerson.accommodations}
                                </Descriptions.Item>
                                <Descriptions.Item label="Status" span={3}>
                                    {Object.entries(selectedPerson.tags || {}).map(([key, value]) => (
                                        <Tag color={colorMaps[value]} key={key}>
                                            {value}
                                        </Tag>
                                    ))}
                                </Descriptions.Item>
                            </Descriptions>
                        )
                        }

                    </Card>
                ) : (
                    <Card
                        title="No Ride Selected"
                        loading={loading}
                        style={{
                            width: 300,
                        }}
                    >
                        Select a rider from the left menu
                    </Card>
                )}
            </div>
        </div>
    )
}

export default PersonSelection;
