let stepStates = {
    step0: true,
    step1: false,
    step2: false,
    step3: false
  };
  let KT1 = 0;
  let SB2 = true; // Inicializar SB2 como true
  let SQ3 = true; // Inicializar SQ3 como true
  
  function updateStepState(step, state) {
    stepStates[step] = state;
    document.getElementById(step).className = state ? 'step active' : 'step';
  }
  
  function simulateGrafcet() {
    if (stepStates.step0) {
      updateStepState('step0', false);
      updateStepState('step1', true);
      KT1 = 0;
      SB2 = false;
      SQ3 = false;
    } else if (stepStates.step1) {
      updateStepState('step1', false);
      updateStepState('step2', true);
      KT1 += 1;
    } else if (stepStates.step2) {
      KT1 += 1;
      if (KT1 >= 3) {
        updateStepState('step2', false);
        updateStepState('step3', true);
        SB2 = true;
        setTimeout(function() {
          SQ3 = true;
        }, 3000);
      }
    } else if (stepStates.step3) {
      if (SB2 && SQ3) {
        updateStepState('step3', false);
        updateStepState('step0', true);
        SQ3 = false;
      }
    }
  }
  
  setInterval(simulateGrafcet, 1000);
  