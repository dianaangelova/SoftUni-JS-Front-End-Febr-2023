function getInfo() {

    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";
    const ulContainer = document.getElementById("buses");
    const stopIdVal = document.getElementById("stopId").value;
    const stopName = document.getElementById("stopName");

    ulContainer.innerHTML="";
    stopName.textContent="";

    fetch(`${BASE_URL}${stopIdVal}`, {method: 'GET'})
        .then((response) => response.json())
        .then((busInfo) => {

            const {buses, name} = busInfo;
            stopName.textContent= `${name}`;

            for(const busId in buses) {
                const newLi = document.createElement("li");
                newLi.textContent=`Bus ${busId} arrives in ${busId.value} minutes`;
                ulContainer.appendChild(newLi);
            }
        })
        .catch((error) => {
            stopName.textContent=error.message;
        })
}