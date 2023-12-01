// PSEUDO
// The initial version will be hard-coded. 
// 
// basePopulation: sum of (living) cohorts
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