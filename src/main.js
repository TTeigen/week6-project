//imports
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './backend-code';
//variables
let body;
let bio;
//code

$(function() {

  $('.formOne').submit(function(event){
    event.preventDefault();
    $('.results').text("");
    $('#docs').text('');
    let symptom = $('#symptom').val();
    let specialty = $('#specialty').val();
    let gender = $('#gender').val();
    let search = new DoctorSearch;
    console.log(symptom.length);
    if (!symptom && !specialty) {
      alert("Please enter either a symtpom or specialty");
      return;
    }
    let results = search.searchBySymptom(symptom,gender,specialty);
    results.then (function(response){
      body = JSON.parse(response);

      if (body.data.length > 0) {
        $('#docs').text(body.data.length);
        for (let i = 0; i < body.data.length; i++) {
          let pic = body.data[i].profile.image_url;
          let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}`;
          bio = `${body.data[i].profile.bio}`;
          $('.results').append(`<div class= 'doc${i}'>${name}<br>`);
          $('.results').append(`<img src="${pic}"></div><hr>`);
        }
      } else {
        $('.results').append(`<p> Sorry! Unfortunately your search has not matched with any doctors. Perhaps try a different search term, or search by specialty (eg, pediatrician)</p>`)
      }
    });
  });
});
