export const PIPELINE=['New Lead','Contacted','Estimate Scheduled','Estimate Sent','Won','Lost'];
export const JOB_STATUSES=['Scheduled','In Progress','Completed'];
export const ESTIMATE_STATUSES=['Draft','Sent','Approved','Declined'];
export const SERVICES=['Garage Floor','Patio / Pool Deck','Commercial Flooring','Basement Floor','Driveway / Walkway','Other'];
export const currency=(n=0)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(Number(n)||0);
export const shortDate=(s)=>s?new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'}):'Not set';
export const longDate=(s)=>s?new Date(s+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}):'Not scheduled';
export const isoDay=(offset=0)=>{const d=new Date();d.setDate(d.getDate()+offset);return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
export const nextId=()=>globalThis.crypto?.randomUUID?.()||String(Date.now())+String(Math.random()).slice(2);
export const SAMPLE={
  demo:true,
  leads:[
    {id:'l1',name:'Michael Turner',company:'Residential',phone:'(201) 555-0147',email:'michael@example.com',service:'Garage Floor',location:'Wayne, NJ',value:4200,stage:'New Lead',owner:'Sales Rep',source:'Website',notes:'Two-car garage, interested in flake finish.',created:isoDay(-1),followUp:isoDay(0)},
    {id:'l2',name:'Sarah Williams',company:'Residential',phone:'(973) 555-0124',email:'sarah@example.com',service:'Patio / Pool Deck',location:'Montclair, NJ',value:6500,stage:'Contacted',owner:'Owner',source:'Referral',notes:'Looking for UV-resistant outdoor coating.',created:isoDay(-5),followUp:isoDay(1)},
    {id:'l3',name:'Daniel Brooks',company:'Brooks Auto Shop',phone:'(201) 555-0162',email:'daniel@example.com',service:'Commercial Flooring',location:'Paramus, NJ',value:12400,stage:'Estimate Scheduled',owner:'Sales Rep',source:'Phone',notes:'Site walkthrough scheduled.',created:isoDay(-6),followUp:isoDay(2)},
    {id:'l4',name:'Emily Carter',company:'Residential',phone:'(973) 555-0138',email:'emily@example.com',service:'Basement Floor',location:'Clifton, NJ',value:3700,stage:'Estimate Sent',owner:'Owner',source:'Google',notes:'Waiting for decision on color.',created:isoDay(-9),followUp:isoDay(0)},
    {id:'l5',name:'James Rodriguez',company:'Residential',phone:'(201) 555-0188',email:'james@example.com',service:'Garage Floor',location:'Hoboken, NJ',value:5100,stage:'Won',owner:'Sales Rep',source:'Website',notes:'Approved, schedule installation.',created:isoDay(-12),followUp:''},
    {id:'l6',name:'Olivia Bennett',company:'Residential',phone:'(973) 555-0113',email:'olivia@example.com',service:'Patio / Pool Deck',location:'Bloomfield, NJ',value:4800,stage:'Contacted',owner:'Owner',source:'Instagram',notes:'Sent coating options.',created:isoDay(-3),followUp:isoDay(3)}
  ],
  estimates:[
    {id:'e1',leadId:'l4',client:'Emily Carter',service:'Basement Floor',amount:3700,status:'Sent',date:isoDay(-3),validUntil:isoDay(10),notes:'Moisture barrier + solid color finish'},
    {id:'e2',leadId:'l3',client:'Daniel Brooks',service:'Commercial Flooring',amount:12400,status:'Draft',date:isoDay(0),validUntil:isoDay(14),notes:'Pending on-site measurements'},
    {id:'e3',leadId:'l5',client:'James Rodriguez',service:'Garage Floor',amount:5100,status:'Approved',date:isoDay(-8),validUntil:isoDay(4),notes:'Flake system with topcoat'},
    {id:'e4',leadId:'l2',client:'Sarah Williams',service:'Patio / Pool Deck',amount:6500,status:'Sent',date:isoDay(-2),validUntil:isoDay(12),notes:'Outdoor UV-stable coating'}
  ],
  jobs:[
    {id:'j1',leadId:'l5',client:'James Rodriguez',service:'Garage Floor',location:'Hoboken, NJ',startDate:isoDay(1),endDate:isoDay(2),amount:5100,paid:1200,status:'Scheduled',notes:'Prep and flake install, two-car garage'},
    {id:'j2',leadId:'',client:'Alex Morgan',service:'Garage Floor',location:'Ridgewood, NJ',startDate:isoDay(3),endDate:isoDay(4),amount:3800,paid:1900,status:'Scheduled',notes:'Sample job for schedule preview'},
    {id:'j3',leadId:'',client:'Taylor Reed',service:'Basement Floor',location:'Fair Lawn, NJ',startDate:isoDay(-4),endDate:isoDay(-3),amount:4600,paid:4600,status:'Completed',notes:'Completed sample installation'}
  ],
  tasks:[
    {id:'t1',title:'Follow up on basement estimate',detail:'Emily Carter',due:isoDay(0),owner:'Owner',done:false,leadId:'l4'},
    {id:'t2',title:'Confirm garage installation',detail:'James Rodriguez',due:isoDay(0),owner:'Sales Rep',done:false,leadId:'l5'},
    {id:'t3',title:'Commercial site walkthrough',detail:'Daniel Brooks',due:isoDay(2),owner:'Sales Rep',done:false,leadId:'l3'},
    {id:'t4',title:'Call Sarah about patio finish',detail:'Sarah Williams',due:isoDay(1),owner:'Owner',done:false,leadId:'l2'}
  ]
};
export const EMPTY={demo:false,leads:[],estimates:[],jobs:[],tasks:[]};
export function loadWorkspace(){try{const raw=localStorage.getItem('cce-workspace-v1'); if(raw){const v=JSON.parse(raw); if(v&&Array.isArray(v.leads)&&Array.isArray(v.jobs))return v;}}catch{}return SAMPLE;}
