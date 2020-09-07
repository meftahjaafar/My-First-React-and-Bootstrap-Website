import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import course1 from './assets/course1.jpeg';
import course2 from './assets/course2.jpeg';
import course3 from './assets/course3.jpeg';

export const Home = () =>   (
<div>
    <h2>Locations</h2>
          <p>Online, San Francisco, New York City</p>
    <h2>About App Academy</h2>
          <p>App Academy is a coding school that offers online and in-person training programs with no tuition 
             cost until you’re hired as a Software Engineer earning over $50,000. The career changing outcomes 
             that App Academy has produced since being founded in 2012 is a major reason why it’s considered the 
             most respected code school in the industry. App Academy has placed over 3,000 people in full-time 
             Software Engineering roles at average salaries of $101,000 in San Francisco, $90,000 in New York,
             and $80,000 nationally. Their alumni work at over 1,000 companies worldwide, including Google, Apple,
             Netflix, Twitter, and more. App Academy understands the skills that make a successful software engineer,
             and more importantly, how to teach them to you.
             If you don’t succeed after completing the program, you pay nothing, and that’s how it should be.</p>
    <h2>Courses</h2>
<div class="row">
<div class="col">
<div class="card">
  <img class="card-img-top"  src={course1} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title"><a>Bootcamp Prep</a></h4>
    <p class="card-text"><h5>Cost:</h5> 2 999 $US <h5>Duration:</h5> 4 weeks</p>
    <a href="#" class="btn btn-primary">More Info +</a>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img class="card-img-top" src={course2} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title"><a>Software Engineer Track: In-Person</a></h4>
    <p class="card-text"><h5>Cost:</h5> 17 000 $US <h5>Duration:</h5> 16 weeks</p>
    <a href="#" class="btn btn-primary">More Info +</a>
  </div>
</div>
</div>
<div class="col">
<div class="card">
  <img class="card-img-top" src={course3} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title"><a>Software Engineer Track: Online</a></h4>
    <p class="card-text"><h5>Cost:</h5> 20 000 $US <h5>Duration:</h5> 24 weeks</p>
    <a href="#" class="btn btn-primary">More Info +</a>
  </div>
</div>
</div>
</div>
</div>
)