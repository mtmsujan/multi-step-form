// multi step form
function nextStep(currentStep) {
    document.getElementById(`step-${currentStep}`).classList.add('hidden');
    document.getElementById(`step-${currentStep + 1}`).classList.remove('hidden');

    // Update step indicators
    document.getElementById(`step-${currentStep}-indicator`).classList.remove('text-blue-600');
    document.getElementById(`step-${currentStep}-indicator`).classList.add('text-gray-600');
    document.getElementById(`step-${currentStep + 1}-indicator`).classList.add('text-blue-600');
}

function previousStep(currentStep) {
    document.getElementById(`step-${currentStep}`).classList.add('hidden');
    document.getElementById(`step-${currentStep - 1}`).classList.remove('hidden');

    // Update step indicators
    document.getElementById(`step-${currentStep}-indicator`).classList.remove('text-blue-600');
    document.getElementById(`step-${currentStep}-indicator`).classList.add('text-gray-600');
    document.getElementById(`step-${currentStep - 1}-indicator`).classList.add('text-blue-600');
}
