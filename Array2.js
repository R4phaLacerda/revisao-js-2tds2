let armas = ["Laser", "Míssil", "Granada", "Espada", "Metralhadora", "Chicotada", "Sniper", "Minigun"];
let ataques = [];

ataques.push("Mr. CyberPotato Dev");
ataques.push(armas[5]);
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[5]);
//console.log("Mr. CyberPotato Dev: " + ataques[1]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`Mr. CyberPotato Dev: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}
