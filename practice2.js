class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    if(daysOff > 20) {
      const extraDays = daysOff - 20;
      const finePerDay = extraDays * 30;
      console.log(this._name + ', You exceeded the vacation day limit by ' + extraDays + '. You will be deducted ' + finePerDay + '$ from your salary.');
    }
    else {
      this._remainingVacationDays -= daysOff;
    }
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }
  get insurance() {
    return this._insurance;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
const doctorAnne = new Doctor('Anne', 5000);
doctorAnne.takeVacationDays(25);
