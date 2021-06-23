const  patients = [
    {
        id: 'ADELANG',
        policies:[],
        count: 30,
    },
    {
        id: 'LDIAZ',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'BCBS',policyNumber:'1122334455',groupNumber:'VALIDATE'}],
        count: 10,
    },
    {
        id: 'ATORRES',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'CIGNA',policyNumber:'9876543221',groupNumber:'INVALIDATE'},{paymetPlan:'BCBS',policyNumber:'1122334455',groupNumber:'VALIDATE'}],
        count: 10,
    },
    {
        id: 'PKUMAR',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'CIGNA',policyNumber:'9876543221',groupNumber:'INVALIDATE'}],
        count: 2,
    }
];

export default patients;