//imports
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './backend-code';
//variables
let body;
//code
$(function() {

  $('.formOne').submit(function(event){
    event.preventDefault();
    $('#docList').text("");
    let symptom = $('#symptom').val();
    let specialty = $('#specialty').val();
    let gender = $('#gender').val();
    let search = new DoctorSearch;
    let resultTest = search.searchBySymptom(symptom,gender,specialty);
    console.log(resultTest);
    resultTest.then (function(response){
      body = JSON.parse(response);
      console.log(body);
      if (body.data.length > 0) {
        for (let i = 0; i < 10; i++) {
          let pic = body.data[i].profile.image_url;
          let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}`;
          let bio = `${body.data[i].profile.bio}`;
          $('.results').append(`<div class = doctor${i}>${name}<br>`);
          $('.results').append(`<img src="${pic}">`);
          $('.results').append(`<p id=bio${i}>${bio}</div></p><hr>`);
        }
      } else {
        $('.results').append(`<p> Sorry! Unfortunately your search for <em>"${userSymptom}"</em> has not matched with any doctors. Perhaps try a different search term, or search by specialty (eg, pediatrician)</p>`)
      }
    });

  });
});
