function deviceNamesSystem(devicenames) {
    // Write your code here
    let devices = [];
    let deviceNums = {};
    for (let i = 0; i < devicenames.length; i++) {
        let device = devicenames[i];

        if (devices.includes(device)) {
            devices.push(device + deviceNums[device].toString());
        }
        else {
            devices.push(device);
        }
        if (device in deviceNums) {
            deviceNums[device]++;
        }
        else {
            deviceNums[device] = 1;
        }
    }
    return devices;
}