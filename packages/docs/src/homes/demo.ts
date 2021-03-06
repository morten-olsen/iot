import Device from '../context/EnvironmentContext/Device';

const devices: Device[] = [
  {
    type: 'hueLight',
    home: 'demo',
    key: 'demo-6',
    baseKey: 'lights.2',
    room: 'Kitchen',
    config: { name: 'Light 1' },
  },
  {
    type: 'hueLight',
    home: 'demo',
    key: 'demo-7',
    baseKey: 'lights.3',
    room: 'Kitchen',
    config: { name: 'Light 2' },
  },
  {
    type: 'philipsHueDimmerSwitch',
    home: 'demo',
    key: 'demo-8',
    baseKey: 'dimmerSwitches.1',
    room: 'Kitchen',
    config: { name: 'Dimmer switch' },
  },
  {
    type: 'motionSensor',
    home: 'demo',
    key: 'demo-10',
    baseKey: 'motionSensors.1',
    room: 'Kitchen',
    config: { name: 'Motion Sensor' },
  },
  {
    type: 'hueLight',
    home: 'demo',
    key: 'demo-1',
    baseKey: 'lights.0',
    room: 'Living Room',
    config: { name: 'Light 1' },
  },
  {
    type: 'hueLight',
    home: 'demo',
    key: 'demo-5',
    baseKey: 'lights.1',
    room: 'Living Room',
    config: { name: 'Light 2' },
  },
  {
    type: 'philipsHueDimmerSwitch',
    home: 'demo',
    key: 'demo-2',
    baseKey: 'dimmerSwitches.0',
    room: 'Living Room',
    config: { name: 'Dimmer switch' },
  },
  {
    type: 'motionSensor',
    home: 'demo',
    key: 'demo-4',
    baseKey: 'motionSensors.0',
    room: 'Living Room',
    config: { name: 'Motion Sensor' },
  },
];

export default devices;
