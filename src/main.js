import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch } from './backend-code';

$(function() {

  $('.formOne').submit(function(event){
    event.preventDefault();
    $('#docList').text("");
    let userSymptom = $('#symptom').val();
    let search = new DoctorSearch;
    let resultTest = search.searchBySymptom(userSymptom);
    console.log(resultTest);
    resultTest.then (function(response){
      let body = JSON.parse(response);
      console.log(body);
      for (let i = 0; i < 10; i++) {
        let pic = body.data[i].profile.image_url;
        let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`;
        $('#docList').append(`<li>${name}<br><img src="${pic}"></li><hr>`);
      }
    });
  });
});
