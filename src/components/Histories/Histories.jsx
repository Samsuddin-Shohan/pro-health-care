import React from 'react';
import CountUp from 'react-countup';
import './Histories.css';
const Histories = () => {



  return (
    <div className='histories px-5 py-5 my-5 text-center'>
      <small className='history-welcome'>Welcome to Pro Health Care</small>
      <h2 className='history-title'>Our Care Team is Ready to Help You!</h2>
      <p className='history-description fw-bold'>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
        and I will give you a complete account of the system, and the master-builder of human
        happiness.</p>
      <div className='row'>
        <div className='col-md-3 d-flex justify-content-center align-items-center '>
          <div>
            <CountUp duration={2.75}
              start={0} end={20} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span className='history-count' ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p className='fw-bolder'>years of experience</p>
          </div>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center '>
          <div>
            <CountUp duration={2.75} start={0} end={4600} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span className='history-count' ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p className='fw-bolder'>well smily faces</p>
          </div>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center '>
          <div>
            <CountUp duration={2.75} start={0} end={600} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span className='history-count' ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p className='fw-bolder'>Heart Transfer</p>
          </div>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center '>
          <div>
            <CountUp duration={2.75} start={0} end={80} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span className='history-count' ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <p className='fw-bolder'>Got Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histories;