import axios from "axios";

export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=20&nat=us&inc=name,email,phone,dob,picture,id"); 
    },
    getBasedOfName: function() {
        return axios.get("https://randomuser.me/api/?results=20&nat=us&inc=name,email,phone,dob,picture,id"); 
    }
}; 