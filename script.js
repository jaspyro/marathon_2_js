var a = fetch("http://worldtimeapi.org/api/ip")
.then(response => response.json())
.then(json());
