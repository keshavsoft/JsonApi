let getIP = async (json) => {
    console.log("My public IP address is: ", json.ip);
    localStorage.setItem("YourIp", json.ip);
    await geoFindMe({ inClientIp: json.ip });
};

let geoFindMe = async ({ inClientIp }) => {
    let success = async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("latitude : ", latitude, longitude);
        localStorage.setItem("GpsLatitude", latitude);
        localStorage.setItem("GpsLongitude", longitude);
        //await jFToKeshavSoft({ inClientIp, inlatitude: latitude, inlongitude: longitude });

        // status.textContent = '';
        // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
};
