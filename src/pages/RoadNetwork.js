import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../css/styles.css';
import $ from 'jquery';

export default function RoadNetwork() {
  const [animating, setAnimating] = useState(false);
  const [isRoadNetworkOpen, setIsRoadNetworkOpen] = useState(false);

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
    setIsRoadNetworkOpen(false)
  };

  const handleRoadNetwork = () => {
    setIsRoadNetworkOpen(true)
  }
  
  return (
    <div>
      <Sidebar />
      <div className="d-flex justify-content-end px-5">
        <button type="button" className="btn btn-primary align-self-end my-4" onClick={handleRoadNetwork}>
          Add Road Network
        </button>
      </div>
      {isRoadNetworkOpen && (
        <div className="container" style={{ height: '100%' }}>
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
                {/* <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">
                  Tell us something more about you
                </h3> */}
                <table class="table table-hover table-bordered">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <th>Section Name:</th>
                      <td>
                        <input type="text" name="sname" placeholder="" />
                      </td>
                      <th>Length</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> km
                      </td>
                    </tr>
                    <tr>
                      <th>Section ID:</th>
                      <td>
                        <input type="text" name="sid" placeholder=""  />
                      </td>
                      <th>Carriageway width</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> m
                      </td>
                    </tr>
                    <tr>
                      <th>Link Name:</th>
                      <td>
                        <input type="text" name="lname" placeholder="" />
                      </td>
                      <th>Shoulder width</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> m
                      </td>
                    </tr>
                    <tr>
                      <th>Link ID:</th>
                      <td>
                        <input type="text" name="lid" placeholder="" />
                      </td>
                      <th>No. of Lanes</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                      <th>Speed Flow Type:</th>
                      <td>
                        <select name="sftype" id="sftype">
                          <option value="">Two Lane Wide</option>
                        </select>
                      </td>
                      <th colSpan='2'>Traffic Data:</th>
                    </tr>
                    <tr>
                      <th>Traffic Flow Pattern:</th>
                      <td>
                        <select name="tfpattern" id="tfpattern">
                          <option value="">Collector Street Flow</option>
                        </select>
                      </td>
                      <th>Motorised</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> AADT 
                      </td>
                    </tr>
                    <tr>
                      <th>Climate Zone:</th>
                      <td>
                        <select name="czone" id="czone">
                          <option value="">North India Plane</option>
                        </select>
                      </td>
                      <th>NMT</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> AADT
                      </td>
                    </tr>
                    <tr>
                      <th>Road Class:</th>
                      <td>
                        <select name="rclass" id="rclass">
                          <option value="">Secondary or main</option>
                        </select>
                      </td>
                      <th>Year</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                      <th>Surface Class:</th>
                      <td>
                        <select name="sclass" id="sclass">
                          <option value="">Bituminous</option>
                        </select>
                      </td>
                      <th>Flow Direction</th>
                      <td>
                        <select name="" id="">
                          <option value="">Two-way</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>Pavement Type:</th>
                      <td>
                        <select name="ptype" id="ptype">
                          <option value="">
                            Asphalt Mix on Asphalt Pavement
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="button"
                  name="next"
                  className="next action-button"
                  value="Next"
                  onClick={handleNext}
                />
              </fieldset>
              <fieldset>
                {/* <h2 className="fs-title">Social Profiles</h2>
                <h3 className="fs-subtitle">
                  Your presence on the social network
                </h3> */}
                <table class="table table-hover table-bordered ">
                  <thead></thead>
                  <tbody>
                    <tr>
                    <th>Rise + Fall:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> m/km
                      </td>
                    </tr>
                    <tr>
                    <th>Avg Horiz Curvature:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> deg/km
                      </td>
                    </tr>
                    <tr>
                    <th>Speed Limit:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> km/h
                      </td>
                    </tr>
                    <tr>
                    <th>Altitude:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> m
                      </td>
                    </tr>
                    <tr>
                    <th>Drain Type:</th>
                      <td>
                        <select name="" id="">
                          <option value="">Surface Lined</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>

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
              <table class="table table-hover table-bordered ">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <th colSpan='2'>Surfacing Data:</th>
                    </tr>
                    <tr>
                    <th>Material Type</th>
                    <td>
                        <select name="" id="">
                          <option value="">Surface Lined</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                    <th>Most recent surfacing thickness:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> mm
                      </td>
                    </tr>
                    <tr>
                    <th>Previous/Old surfacing thickness:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> mm
                      </td>
                    </tr>
                    <tr>
                      <th colSpan='2'>Previous works:</th>
                    </tr>
                    <tr>
                    <th>Last construction or reconstruction:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> year
                      </td>
                    </tr>
                    <tr>
                    <th>Last rehabilitation (overlay):</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> year
                      </td>
                    </tr>
                    <tr>
                    <th>Last resurfacing (resealing):</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> year
                      </td>
                    </tr>
                    <tr>
                    <th>Last preventative treatment:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> year
                      </td>
                    </tr>
                    <tr>
                      <th colSpan='2'>Strength Data:</th>
                    </tr>
                    <tr>
                    <th>Calculated wet season model parameter SNP:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>DEF:</th>
                      <td className='d-flex align-items-center'>
                        <input type="text" name="length" placeholder="" className='mx-2' /> mm
                      </td>
                    </tr>
                  </tbody>
                </table>
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
              <table class="table table-hover table-bordered ">
                  <thead></thead>
                  <tbody>
                    <tr>
                    <th>Condition at the end of the year</th>
                    <td>
                        <input type="text" name="length" placeholder="" className='mx-2' />
                      </td>
                    </tr>
                    <tr>
                    <th>Roughness (IRI - m/km):</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Total Area of cracking %:</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Ravelled area %:</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>No. of Potholes (No/km):</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Edge break area (m^2/km):</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Mean rut depth (mm):</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Texture depth (mm):</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Skid resistance (SCRIM 50km/h):</th>
                      <td>
                        <input type="text" name="length" placeholder="" className='mx-2' /> 
                      </td>
                    </tr>
                    <tr>
                    <th>Drainage:</th>
                      <td>
                        <select name="" id="">
                          <option value="">Good</option>
                        </select>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
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
      )}
    </div>
  );
}
