//imports
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './backend-code';

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
      let body = JSON.parse(response);
      console.log("body");
      console.log(body);
      if (body.data.length > 0) {
        $('#docs').text(body.data.length);
        for (let i = 0; i < body.data.length; i++) {
          let patients;
          let pic = body.data[i].profile.image_url;
          let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}`;
          let phone = body.data[i].practices[0].phones[0].number;
          let address =` ${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.street2}, ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip}`;
          if(body.data[i].practices[0].accepts_new_patients === true) {
            patients = "Yes";
          } else {
            patients = "No";
          }
          $('.results').append(`<div class= 'doc${i}'>${name}<br>`);
          $('.results').append(`<img src="${pic}">`);
          $('.results').append(`<div class = 'bio'>Phone: ${phone},<br>Address: ${address},<br>Accepting Patients: ${patients} </div></div><hr>`);

        }
      } else {
        $('.results').append(`<p> Sorry! Unfortunately your search has not matched with any doctors. Perhaps try a different search term, or search by specialty (eg, pediatrician)</p>`)
      }
    });
  });
});
