function calculateMeritFromTime() {
    const hours = parseInt(document.getElementById('hoursInPrison').value) || 0;
    const minutes = parseInt(document.getElementById('minutesInPrison').value) || 0;

    const totalSeconds = (hours * 3600) + (minutes * 60);
    const merit = totalSeconds; // 1 merit = 1 second

    const totalHours = Math.floor(merit / 3600);
    const totalMinutes = Math.floor((merit % 3600) / 60);

    document.getElementById('meritFromTimeResult').textContent = 
        `Merit Required: ${merit} (Equivalent to ${totalHours}h ${totalMinutes}m)`;
}

function calculateTotalMerit() {
    const hadanite = parseInt(document.getElementById('hadaniteAmount').value) || 0;
    const dolivine = parseInt(document.getElementById('dolivineAmount').value) || 0;
    const aphorite = parseInt(document.getElementById('aphoriteAmount').value) || 0;

    const meritFromHadanite = hadanite * 460;
    const meritFromDolivine = dolivine * 250;
    const meritFromAphorite = aphorite * 60;

    const totalMerit = meritFromHadanite + meritFromDolivine + meritFromAphorite;
    const totalHours = Math.floor(totalMerit / 3600);
    const totalMinutes = Math.floor((totalMerit % 3600) / 60);

    document.getElementById('totalMeritResult').textContent = 
        `Total Merit: ${totalMerit} (Equivalent to ${totalHours}h ${totalMinutes}m)`;
}

function calculateMineralsNeeded() {
    const desiredMerit = parseInt(document.getElementById('desiredMerit').value) || 0;

    const hadaniteNeeded = Math.floor(desiredMerit / 460);
    const dolivineNeeded = Math.floor(desiredMerit / 250);
    const aphoriteNeeded = Math.floor(desiredMerit / 60);

    document.getElementById('mineralsNeededResult').textContent = 
        `Minerals Needed for ${desiredMerit} Merit: Hadanite: ${hadaniteNeeded}, Dolivine: ${dolivineNeeded}, Aphorite: ${aphoriteNeeded}`;
}

function calculateMineralsForTime() {
    const hours = parseInt(document.getElementById('hoursForPrison').value) || 0;
    const minutes = parseInt(document.getElementById('minutesForPrison').value) || 0;

    const totalSeconds = (hours * 3600) + (minutes * 60);
    const meritNeeded = totalSeconds; // 1 merit = 1 second

    const hadaniteNeeded = Math.floor(meritNeeded / 460);
    const dolivineNeeded = Math.floor(meritNeeded / 250);
    const aphoriteNeeded = Math.floor(meritNeeded / 60);

    document.getElementById('mineralsForTimeResult').textContent = 
        `Minerals Needed for ${hours}h ${minutes}m of Prison Time: Hadanite: ${hadaniteNeeded}, Dolivine: ${dolivineNeeded}, Aphorite: ${aphoriteNeeded}`;
}
