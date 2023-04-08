import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../css/styles.css';
import $ from 'jquery';

export default function RoadNetwork() {
  const [animating, setAnimating] = useState(false);

  const handleNext = (event) => {
    event.preventDefault();
    if (animating) return false;
    setAnimating(true);

    const current_fs = $(event.target).parent();
    const next_fs = $(event.target).parent().next();

    //activate next step on progressbar using the index of next_fs
    $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          const scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          const left = now * 50 + '%';
          //3. increase opacity of next_fs to 1 as it moves in
          const opacity = 1 - now;
          current_fs.css({
            transform: 'scale(' + scale + ')',
            position: 'absolute',
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          setAnimating(false);
        },
      }
    );
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    if (animating) return false;
    setAnimating(true);

    const current_fs = $(event.target).parent();
    const previous_fs = $(event.target).parent().prev();

    //de-activate current step on progressbar
    $('#progressbar li')
      .eq($('fieldset').index(current_fs))
      .removeClass('active');

    //show the previous fieldset
    previous_fs.show();
    // //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          const scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          const left = (1 - now) * 50 + '%';
          //3. increase opacity of previous_fs to 1 as it moves in
          const opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            transform: 'scale(' + scale + ')',
            opacity: opacity,
            position: 'relative',
          });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          setAnimating(false);
        },
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Sidebar />
      <div className="d-flex justify-content-end px-5">
        <button type="button" className="btn btn-primary align-self-end my-4">
          Add Road Network
        </button>
      </div>
      <div className="" style={{ height: '100%' }}>
        {/* multi step form for road network */}
        <div className="row">
          <div className="col-md-12 col-md-offset-3">
            <form id="msform">
              <ul id="progressbar">
                <li className="active">Definition</li>
                <li>Geometry</li>
                <li>Pavement</li>
                <li>Condition</li>
              </ul>

              <fieldset>
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">
                  Tell us something more about you
                </h3>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <input type="text" name="phone" placeholder="Phone" />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={handleNext}
                />
              </fieldset>
              <fieldset>
                <h2 className="fs-title">Social Profiles</h2>
                <h3 className="fs-subtitle">
                  Your presence on the social network
                </h3>
                <input type="text" name="twitter" placeholder="Twitter" />
                <input type="text" name="facebook" placeholder="Facebook" />
                <input type="text" name="gplus" placeholder="Google Plus" />
                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={handlePrevious}
                />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={handleNext}
                />
              </fieldset>
              <fieldset>
                <h2 className="fs-title">Create your account before</h2>
                <h3 className="fs-subtitle">Fill in your credentials</h3>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="pass" placeholder="Password" />
                <input
                  type="password"
                  name="cpass"
                  placeholder="Confirm Password"
                />
                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={handlePrevious}
                />
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={handleNext}
                />
              </fieldset>
              <fieldset>
                <h2 className="fs-title">Create your account</h2>
                <h3 className="fs-subtitle">Fill in your credentials</h3>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="pass" placeholder="Password" />
                <input
                  type="password"
                  name="cpass"
                  placeholder="Confirm Password"
                />
                <input
                  type="button"
                  name="previous"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={handlePrevious}
                />
                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="Submit"
                  onClick={handleSubmit}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
