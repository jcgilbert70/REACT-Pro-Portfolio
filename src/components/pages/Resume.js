import React from 'react';
import '../../styles/Resume.css';
import PDFresume from '../../pdf/Resume.pdf';

export default function Resume() {
  return (
    <>
      <header className="resume">
        <h2>Resume</h2>
        <span><a href={PDFresume} target="_blank">View downloadable version</a></span>
      </header>

      <article className="section-content resume">
        
        <h3>Professional Summary</h3>

        <section>
          <p>Experienced Manager of a variety of teams with various proficiencies. Rebranding myself to work in tech, building strengths in the construction of responsive mobile apps with focused on user experience.</p>
        </section>

        <h3>Career Summary</h3>

        <section>
          <div className="company">
            <span><strong>Steiner Electric</strong> &bull; <em>Branch Manager</em></span>
            <span className="date">March 2020 - August 2022</span>
          </div>
          <ul>
            <li>All branch functions for St Charles and Crystal Lake locations</li>
            <li>All brick and mortar maintenance, working with and setting up contracts for outside services</li>
            <li>Authorizing all invoices, working with team leads to rectify any descrepensies</li>
            <li>Took on all Assistant Manager responsibilites</li>
            <li>Managed a complete renovation for a large department relocation into the St Charles location</li>
          </ul>
        </section>

        <section>
          <div className="company">
            <span><strong>Steiner Electric</strong> &bull; <em>Assistanct Branch Manager</em></span>
            <span className="date">May 2019 - March 2020</span>
          </div>
          <ul>
            <li>Continued all Operations Managers responsibilities and took on managing a 2nd branch</li>
            <li>Part of a team that did layout, setup, and all updating of all WMS systems for a new branch</li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <section>
          <div className="company">
            <span><strong>Steiner Electric</strong> &bull; <em>Operations Manager</em></span>
            <span className="date">February 2018 - May 2019</span>
          </div>
          <ul>
            <li>Managed Inside Sales, Will Call, Warehouse Operations</li>
            <li>Regular coaching of team leaders, and co-coaching of other team members</li>
            <li>Internal and external Audits and records</li>
            <li>Maintain regular sales team and individual meeting</li>
          </ul>
        </section>

        <section>
          <div className="company">
            <span><strong>Steiner Electric</strong> &bull; <em>Warehouse Manager</em></span>
            <span className="date">March 2013 - February 2018</span>
          </div>
          <ul>
            <li>All outbound deliveries, 3rd party Messengers, UPS/FedEx, and LTL</li>
            <li>All in-coming freight to be received</li>
            <li>All returns from customers brought back by drivers coordinated with the returns department</li>
            <li>Maintaining all UL Standards within the warehouse operations</li>
            <li>Safety Coordinator</li>
            <li>Maintain all training of warehouse staff</li>
          </ul>
        </section>

        <section>
          <h3>Proficiencies</h3>
          <p></p>
        </section>

        <section>
          <h3>Programming</h3>
          <p>Node JS &bull; React &bull; ExpressJS &bull; MongoDB &bull; MySQL &bull; HTML5 &bull; CSS3 &bull; JQuery &bull; Javascript &bull; PHP(Wordpress)</p>
        </section>

        <section>
          <h3>Software & Tools</h3>
          <p>Visual Studio &bull; Microsoft Outlook &bull; Microsoft Excel</p>
        </section>
      </article>
    </>
  );
}