export class DoctorSearch {



  searchBySymptom(userInput) {

  let symptomResult =  new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=wa-seattle&sort=rating-asc&skip=0&limit=10&user_key=${process.env.API_KEY};` ;
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

    symptomResult.then(function(response){
      let result = JSON.parse(response);
      return result;
    }

  }
