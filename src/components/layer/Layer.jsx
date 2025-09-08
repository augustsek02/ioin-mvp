import React from 'react';
import Section from '../../components/Section.jsx';
import './Layer.css';
import { Network, Workflow, ShieldCheck, BarChart, Layers } from 'lucide-react';
 
const layersData = [
{badge: "Integration", title: "Intelligent Integration Layer", description: "Connects all systems viaa APIs and ensures real-time synchronization.", 
    backTitle: "Integration", backDescription: "Real-time synchronization between parking systems using APIs.", icon: <Network size={50} strokeWidth={2} color="#007bff" />
  },

{badge: "Automation", title: "Event-driven Automation", description: "Automatically triggers workflows (e.g. ANPR → payment check → gate open).",
  backTitle: "Automation", backDescription: "Triggers workflows for seamless operations with zero delay.", icon: <Workflow size={50} strokeWidth={2} color="#007bff" />
},

{badge: "Enforcement", title: "Smart Enforcement", description: "Patroller’s plate scans cross-checked with live data to avoid false enforcement.",
  backTitle: "Enforcement", backDescription: "Cross-checks plate scans with live data from multiple sources.", icon: <ShieldCheck size={50} strokeWidth={2} color="#007bff" />
},

{badge: "Analytics", title: "Analytics & Insights", description: "Provides occupancy, revenue trends, and compliance dashboards.",
  backTitle: "Analytics", backDescription: "Real-time dashboards for better business insights and decisions.", icon: <BarChart size={50} strokeWidth={2} color="#007bff" />
},

{badge: "Platform", title: "Future-Ready Platform", description: "Integrates signage, intercoms, and 3rd-party analytics systems.",
  backTitle: "Platform", backDescription: "Designed to support future technologies and API integrations.", icon: <Layers size={50} strokeWidth={2} color="#007bff" />
 }

];

const Layer = () => { 
  return(
    <Section id = "Layer" className = "main bg-slate-50 min-h-screen flex items-center section-padding" >
      <div className = "cards-wrapper">
        <div className ="w-full flex flex-col items-center mb-10">
          <h2 className = "text-3xl lg:text-4xl font-bold text-blue-500 leading-tight text-center"> Layers </h2>
          <p className="text-sm text-center  mt-2 max-w-2xl"> The solution is powered by an intelligent integration layer that not only connects these systems but also applies real-time automation, predictive analytics, and centralized monitoring.
</p>
        </div>

        {layersData.map((layer, index) => (
          <div key={index} className="custom-card">
            <div className="content">
           
              <div className="back">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content">
                  <small className="badge">{layer.badge}</small>
                  <div className="description">
                    <div className="title">
                      <p className="title"><strong>{layer.title}</strong></p>
                    </div>
                    <p className="card-footer">{layer.description}</p>
                  </div>
                </div>

              </div>
              
             
              <div className="front">
                <div className="back-content">
                  <div className="icon-wrapper">
                    {layer.icon}
                  </div>
                  <div className="text-content">
                    <h3 className="back-title">{layer.backTitle}</h3>
                    <p className="back-description">{layer.backDescription}</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        ))}
      </div>
    </Section>
  );
};


export default Layer;
