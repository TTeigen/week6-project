export class DoctorSearch {

  searchBySymptom(symptom,gender,specialty) {
    if (gender && symptom) { //if gender && symptom fields only
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=wa-seattle&user_location=47%2C122&gender=${gender}&sort=rating-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    } else if (symptom){ //if symptom field only
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=wa-seattle&user_location=47%2C122&sort=rating-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    } else if (symptom && specialty){ //symptom && specialty fields only
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&specialty_uid=${specialty}&location=wa-seattle&user_location=47%2C122&skip=0&limit=10&user_key=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    } else if (gender && specialty){//gender and specialty fields only
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${specialty}&location=wa-seattle&user_location=47%2C122&gender=${gender}&skip=0&limit=10&user_key=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    } else if (specialty){//specialty field only
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${specialty}&location=wa-seattle&user_location=47%2C122&skip=0&limit=10&user_key=${process.env.API_KEY}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
  }
}


// data[i].uid
