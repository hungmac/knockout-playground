/*************************
 * Container View Model
 ************************/
(function (lib, undefined) {
  function Container(containername) {
    // properties
    this.name = containername || '';
    this.boxCollection = ko.observableArray();
    this.selectedBox = ko.observable(null);

    // subscription
    this.boxCollection.subscribe(function (newValue) {
      
    });
  }

  Container.prototype.addNewBox = function () {
    var newBox = new lib.BoxModel();
    this.selectedBox(newBox);
    return newBox;
  };

  Container.prototype.editBox = function (requestedBox) {
    if (this.boxCollection().indexOf(requestedBox) >= 0) {
      this.selectedBox(requestedBox);
      return requestedBox;
    }
    return false;
  };

  Container.prototype.doneEditingBox = function () {
    var selectedBox = this.selectedBox();

    if (! selectedBox) {
      throw new Error( {name: "NoBoxSelected", value: "no box selected"} );
    }

    if (this.boxCollection().indexOf(selectedBox) < 0) {
      this.boxCollection.push(selectedBox);
    }

    this.selectedBox(null);
  };

  lib.ContainerViewModel = Container;

}(window.Lib = window.Lib || {}));

/*************
 * Box Model
 ************/
(function (lib, undefined) {
  function Box(boxname) {
    this.name = boxname || '';
  }

  lib.BoxModel = Box;

}(window.Lib = window.Lib || {}));

