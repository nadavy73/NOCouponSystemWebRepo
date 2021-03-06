'use strict';
 
admin.factory('adminCompanyService',
    ['$http',
    function ($http) {
        var service = {};
        	
        var url ="http://localhost:8080/WebCouponProject/rest/admin/";
        
        
        service.returnValue = {};
        service.returnValue.AllCompanies = {};

        //Show All Companies
        service.getCompanies = function (){
        	angular.element("#loader").show();   	
        	return $http.get(url+"getallcompanies")
               
        };
      
        //Create New Company
        service.createCompany = function(company) {
      	  return $http({
              method: 'PUT',
              url: url + "createCompany",
              headers: {'Content-Type': 'application/json'},
              data: company
          })
      };
      	  
      	
      
      //Remove Company  
        service.removeCompany = function(id) {
        	return 	 $http({ 
        		method : 'DELETE',
        		url : url + "removeCompany/" + id,
        		headers: {'Content-Type': 'text/plain'},
        		data: id
        	});
        };
        	
        	
        //Update Company
        service.updateCompany= function(id, company) {
        	var companyToUpdate = angular.copy(company);
            companyToUpdate.id = id;
            
        	return $http({
                method: 'POST',
                url: url + "updateCompany",
                headers: {'Content-Type': 'application/json'},
                data: companyToUpdate
        	
        	 });
        };
        	
       return service;
}]);