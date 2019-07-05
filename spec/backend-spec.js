import { DoctorSearch } from './../src/backend-code';

describe('Symptom searching', function(){
let proof;
//test 'failed' but it allowed me to see I was getting info from API which allowed me to troubleshoot in front end
  it('should return a list of doctors for a given symptom', function (){
    let userInput = 'Physical Therapy';
    let search = new DoctorSearch;
    let resultTest = search.searchBySymptom(userInput);
    console.log(resultTest);
    resultTest.then (function(response){
      body = JSON.parse(response);
      console.log(body);
      if (body) {
        proof = true;
      } else {
        proof = false;
      }
    })
    expect(proof).toEqual(true);
  })




})
