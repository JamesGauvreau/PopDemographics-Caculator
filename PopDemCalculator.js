// PSEUDO
// The initial version will be hard-coded. 
// 
// populationWixes: sum of (living) cohorts
// populationMuggles: [determine later]
    // Possibly unnecessary
// popGrowthMuggles: [determine later]
// muggleBirths: [determine later]
    // Initially we'll compile in twenty-year groups, but later we'll track this by decades (cohorts will also be decade-long later).
// mugglebornBirths: [determine later; perhaps 0.01] * muggleBirths
// cohortMortality: 5% 
    // Later, we'll adjust this by cohort. 

// Four Cohorts: cohort_N, cohort_0, cohort_20, and cohort_old. 


    // Each generation, or turn: 
        // 1) cohort_N is given a value based on cohort_20 * cohortFertility. 
        // 2) all cohorts are reduced by cohort_mortality.
        // 3) cohort_old = cohort_old + cohort_20.  
        // 4) cohort_20 = cohort_0.
        // 5) cohort_0 = cohort_N. 
        // 6) cohort_N = 0.
        // Output
        // 

// Work on the below after we've got that output going. 
    // Within each cohort, track "Native Wixes" and "Muggle-borns." 
        // Each segment is adjusted by generation as described below, then compiled into their respective cohorts.
    // marriageRate: [determine later]
    // marriedWixes: cohort * 
    // nativeWixes