export const prepDate = (date) => {
        const Moment = require('moment');
        //        console.log('date reçue' + date)

        var dateR = new Date(date)
        //        console.log('dateR ' + dateR);
        //        console.log('dateRs ' + dateR.toLocaleDateString(langue));

        const dateT = Moment(dateR);
        //        console.log(dateT);
        var offset = new Date().getTimezoneOffset() / 60 + 1;
        //        console.log('Varoffset ' + offset)      
        dateT.add(offset, 'h');
        //        console.log(dateT);
        return new Date(dateT)
};

export const dispDate = (date, langue) => {
        //  console.log(langue);  
        const Moment = require('moment');
        var dateR = new Date(date);
        //    console.log(dateR);
        switch (langue) {
                case 'en':
                        //    console.log('2');
                        return Moment(dateR).format('MM-DD-YYYY')
                        break;
                default:
                        return Moment(dateR).format('DD-MM-YYYY')
        };
};

export const dispDate6 = (date, langue) => {
        //  console.log(langue);  
        const Moment = require('moment');
        console.log('dipsdate6');
        console.log(date);
        if (!date) {
                return "";
        };
        var dateR = new Date(date);
        //    console.log(dateR);
        switch (langue) {
                case 'en':
                        //    console.log('2');
                        return Moment(dateR).format('MM-DD-YY')
                        break;
                default:
                        return Moment(dateR).format('DD-MM-YY')
        };
};
