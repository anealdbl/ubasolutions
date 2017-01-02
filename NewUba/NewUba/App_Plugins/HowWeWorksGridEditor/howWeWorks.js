angular.module("umbraco")
    .controller("howWeWorksController",
    function ($scope, $rootScope, $timeout, dialogService) {
       
        if ("value" in $scope.control && $scope.control.value != null) {
            var comArr = eval($scope.control.value.howWeWorks);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id > $scope.control.value.id) {
                    $scope.control.value.id = comArr[i].id + 1;
                }
            }
        }
        else {
            $scope.control.value = {};
            $scope.control.value = {
                howWeWorks: [
                { 'imagePath': null, 'description': '', 'id': 1 }
                ],id: 1
            };
            $scope.control.value.Heading = "";
            $scope.control.value.subHeading = "";
        }
        $scope.setImage = function (rowId) {
            dialogService.mediaPicker({
                startNodeId: $scope.control.editor.config && $scope.control.editor.config.startNodeId ? $scope.control.editor.config.startNodeId : undefined,
                multiPicker: false,
                cropSize: $scope.control.editor.config && $scope.control.editor.config.size ? $scope.control.editor.config.size : undefined,
                showDetails: true,
                callback: function (data) {

                    $scope.control.value.imageData = {
                        focalPoint: data.focalPoint,
                        id: data.id,
                        image: data.image,
                        imageRowId: rowId
                    };
                    $scope.setUrl();
                }
            });
        };
        $scope.AddRow = function () {            
            $scope.control.value.id++;
            $scope.control.value.howWeWorks.push({ 'imagePath': null, 'description': '', 'id': $scope.control.value.id });
        };

        $scope.setUrl = function () {
            if ($scope.control.value.imageData.image) {
                var url = $scope.control.value.imageData.image;

                if ($scope.control.editor.config && $scope.control.editor.config.size) {
                    url += "?width=" + $scope.control.editor.config.size.width;
                    url += "&height=" + $scope.control.editor.config.size.height;

                    if ($scope.control.value.imageData.focalPoint) {
                        url += "&center=" + $scope.control.value.imageData.focalPoint.top + "," + $scope.control.value.imageData.focalPoint.left;
                        url += "&mode=crop";
                    }
                }
                var comArr = eval($scope.control.value.howWeWorks);
                for (var i = 0; i < comArr.length; i++) {
                    if (comArr[i].id === $scope.control.value.imageData.imageRowId) {
                        comArr[i].imagePath = url;
                        break;
                    }
                }
            }
        };

        $scope.RemoveRow = function (rowId) {
            var index = -1;
            var comArr = eval($scope.control.value.howWeWorks);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].id === rowId) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            $scope.control.value.howWeWorks.splice(index, 1);
        };
    });
