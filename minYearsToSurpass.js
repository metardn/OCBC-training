function minYearsToSurpass(aliceInitial, bobBonus, aliceRate, bobRate) {
  let alice = aliceInitial;
  let bob = bobBonus;
  let years = 0;

  // if bobRate < aliceRate its impossible
  if (bobRate <= aliceRate && bobBonus <= aliceInitial) {
    return -1;
  }

  while (bob <= alice) {
    alice *= 1 + aliceRate;
    bob *= 1 + bobRate;
    years++;

    // max old for bob surpass alice
    if (years > 100) return -1;
  }

  return years;
}

const yearsNeeded = minYearsToSurpass(1000, 800, 0.05, 0.08);
console.log(
  "xx the minimum number of years needed by Bob to exceed Alice:",
  yearsNeeded
);
