// src/components/DepartmentDet.jsx
import React from "react";
import mathDeptImage from "../assets/math_dept.png"; 

function DepartmentDet() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Department of Mathematics</h2>
          <p className="section-sub">Jadavpur University</p>
        </div>

        {/* Text + Image layout */}
        <div className="dept-layout">
          <div className="dept-text-block">
            <p className="dept-text">
              The Department of Mathematics at Jadavpur University was
              established in 1956 and is widely recognised for its excellence
              in both teaching and research. Over the decades, several
              eminent mathematicians have enriched the department through their
              work and leadership.
            </p>

            <p className="dept-text">
              The department has played a leading role in designing the curriculum
              and syllabus for various undergraduate and postgraduate programmes
              in Mathematics, as well as courses in Engineering Mathematics.
              Faculty members are actively involved in research areas such as
              Algebra, Analysis, Differential Equations and their applications,
              Dynamical Systems, Discrete Mathematics and its applications,
              Statistics and Operations Research, Mathematical Modelling,
              Elasticity and Thermo-elasticity, Numerical Analysis,
              Computational Fluid Mechanics, Biomathematics and Ecological
              Systems, Mathematical Physics, and Plasma Dynamics.
            </p>

            <p className="dept-text">
              According to a survey conducted by the Department of Science and
              Technology (DST), Government of India, the department has been
              ranked among the leading research centres in Mathematics. The
              Department also hosts an interdisciplinary centre — the{" "}
              <strong>Centre for Mathematical Biology and Ecology (CMBE)</strong>,
              established in 1997. National and international conferences,
              workshops and academic events are organised regularly with
              significant participation from researchers in India and abroad.
            </p>
          </div>

          <aside className="dept-image-block">
            <div className="dept-image-frame">
              <img
                src={mathDeptImage}
                alt="Ramanujan Bhavan – Department of Mathematics, Jadavpur University"
                className="dept-image"
              />
            </div>
            <p className="dept-image-caption">
              Ramanujan Bhavan – Department of Mathematics, Jadavpur University
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default DepartmentDet;
