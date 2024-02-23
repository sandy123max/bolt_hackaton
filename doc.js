const symptomDiagnoses = {
    "Headache": "You might have a tension headache. Consider taking a break and relaxing.",
    "Fever": "You may be experiencing a viral infection. Drink plenty of fluids and get rest.",
    "Cough": "Your cough might be due to a cold or respiratory infection. Consider seeing a doctor if it persists.",
    "Fatigue": "Feeling tired? Make sure you're getting enough sleep and staying hydrated.",
    "Muscle aches": "Muscle aches could be due to overexertion or a viral infection. Rest and gentle stretching may help.",
    "Shortness of breath": "Shortness of breath could be a sign of asthma or other respiratory conditions. Seek medical attention if severe."
  };
  
  function checkSymptoms() {
    const checkboxes = document.querySelectorAll('input[name="symptom"]:checked');
    const symptoms = Array.from(checkboxes).map(checkbox => checkbox.value);
  
    let diagnosis = "Based on your symptoms, it seems like you might have: ";
    if (symptoms.length === 0) {
      diagnosis = "Please select at least one symptom.";
    } else {
      // Generate diagnosis based on selected symptoms
      const selectedDiagnoses = symptoms.map(symptom => symptomDiagnoses[symptom]);
      diagnosis += selectedDiagnoses.join(" ");
    }
  
    document.getElementById('diagnosis-result').innerText = diagnosis;
  }
  