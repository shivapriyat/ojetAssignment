/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['accUtils', "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojnavigationlist", "ojs/ojswitcher", "ojs/ojradioset", "ojs/ojlabel", "ojs/ojbutton", "ojs/ojdialog", "ojs/ojformlayout", "ojs/ojinputtext", "ojs/ojcheckboxset"],
  function (accUtils, ko, Bootstrap, ArrayDataProvider) {
    function IncidentsViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Incidents page loaded.', 'assertive');
        document.title = "Incidents";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
      // this.updateTheme = (event) => {
      //   console.log("update theme");
      //   if($("code").hasClass("lighttheme")) {
      //     $("code").removeClass("lighttheme");
      //     $("code").addClass("darktheme");
      //     $("code oj-button").addClass("oj-color-invert");
      //   }
      //   else {
      //     $("code").removeClass("darktheme");
      //     $("code").addClass("lighttheme");
      //     $("code oj-button").removeClass("oj-color-invert");
      //   }
      // };


      this.sectionSelectedItem = ko.observable("1");
      this.sections = [
        {
          "id": "1",
          "sectionHeading": "Objectives",
          "codes": [{
            "copyBtn": "CopyOne",
            "modeBtn": "ModeOne",
            "codeText": "pip install --upgrade google-cloud-storage"
          }, {
            "copyBtn": "CopyTwo",
            "modeBtn": "ModeTwo",
            "codeText": "cd your-project<br>python -m venv env<br>venv --version"
          }],
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "id": "2",
          "sectionHeading": "Installing Python",
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "id": "3",
          "sectionHeading": "Using venv to isolate dependencies",
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "id": "4",
          "sectionHeading": "Installing an editor",
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "id": "5",
          "sectionHeading": "Installing the Cloud Client Libraries for Python",
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "id": "6",
          "sectionHeading": "Installing the Cloud SDK",
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          "id": "7",
          "codes": [{
            "copyBtn": "CopyOne",
            "modeBtn": "ModeOne",
            "codeText": "pip install --upgrade google-cloud-storage"
          }, {
            "copyBtn": "CopyTwo",
            "modeBtn": "ModeTwo",
            "codeText": "cd your-project<br>python -m venv env<br>venv --version"
          }],
          "sectionHeading": "What's next",
          "sectionContent": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }];

      updateTheme = function (event) {
        console.log("update theme");
        if ($("code").hasClass("lighttheme")) {
          $("code").removeClass("lighttheme");
          $("code").addClass("darktheme");
          $("code oj-button").addClass("oj-color-invert");
        }
        else {
          $("code").removeClass("darktheme");
          $("code").addClass("lighttheme");
          $("code oj-button").removeClass("oj-color-invert");
        }
      }
      copyToClip = function (event, data) {
        console.log("update");
        console.log(data);
        console.log(event);
        let str = data.codeText.replaceAll("<br>", "\n");
        console.log(str);
        copyToClipboard(str);
      }
      copyToClipboard=function(textToCopy) {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // text area method
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        }
    }
      openUseful = function (event, data) {
        $("#unlikeBtn span[slot='startIcon']").removeClass("oj-ux-ico-thumbs-down-s");
        $("#unlikeBtn span[slot='startIcon']").removeClass("dodgerBlueForIcon");
        $("#unlikeBtn span[slot='startIcon']").addClass("oj-ux-ico-thumbs-down");
        if ($("#likeBtn span[slot='startIcon']").hasClass("oj-ux-ico-thumbs-up")) {
          console.log("openUseful");
          $("#likeBtn span[slot='startIcon']").removeClass("oj-ux-ico-thumbs-up");
          $("#likeBtn span[slot='startIcon']").addClass("dodgerBlueForIcon");
          $("#likeBtn span[slot='startIcon']").addClass("oj-ux-ico-thumbs-up-s");
          console.log(data);
          console.log(event);
          document.getElementById("usefulDialog").open();
        }
        else {
          $("#likeBtn span[slot='startIcon']").removeClass("oj-ux-ico-thumbs-up-s");
          $("#likeBtn span[slot='startIcon']").removeClass("dodgerBlueForIcon");
          $("#likeBtn span[slot='startIcon']").addClass("oj-ux-ico-thumbs-up");

        }
      }
      openUnuseful = function (event, data) {
        $("#likeBtn span[slot='startIcon']").removeClass("oj-ux-ico-thumbs-up-s");
        $("#likeBtn span[slot='startIcon']").removeClass("dodgerBlueForIcon");
        $("#likeBtn span[slot='startIcon']").addClass("oj-ux-ico-thumbs-up");
        if ($("#unlikeBtn span[slot='startIcon']").hasClass("oj-ux-ico-thumbs-down")) {
          console.log("openUnuseful");
          $("#unlikeBtn span[slot='startIcon']").removeClass("oj-ux-ico-thumbs-down");
          $("#unlikeBtn span[slot='startIcon']").addClass("dodgerBlueForIcon");
          $("#unlikeBtn span[slot='startIcon']").addClass("oj-ux-ico-thumbs-down-s");
          console.log(data);
          console.log(event);
          document.getElementById("unusefulDialog").open();
        }
        else {
          $("#unlikeBtn span[slot='startIcon']").removeClass("oj-ux-ico-thumbs-down-s");
          $("#unlikeBtn span[slot='startIcon']").removeClass("dodgerBlueForIcon");
          $("#unlikeBtn span[slot='startIcon']").addClass("oj-ux-ico-thumbs-down");

        }
      }
      closeUseful = function (event, data) {
        console.log("closeUseful");
        console.log(data);
        console.log(event);
        document.getElementById("usefulDialog").close();
      }
      closeUnuseful = function (event, data) {
        console.log("closeUnuseful");
        console.log(data);
        console.log(event);
        document.getElementById("unusefulDialog").close();
      }
      this.sectionDataProvider = new ArrayDataProvider(this.sections, { keyAttributes: "id" });
      this.usefulReason = ko.observable();
      this.usefulReasons = [
        { id: "ur1id", value: "ur1", label: "Easy to understand" },
        { id: "ur2id", value: "ur2", label: "Solved my problem" },
        { id: "ur3id", value: "ur3", label: "Other" }
      ];
      submitUseful = function (event, data) {
        console.log("submitUseful");
        console.log(data);
        console.log(event);
        console.log("submit reason fot choice useful: " + data.usefulReason());
        document.getElementById("usefulDialog").close();
      }
      //usunseful
      this.unusefulReason = ko.observable();
      this.unusefulReasons = [
        { id: "uur1id", value: "uur1", label: "Hard to understand" },
        { id: "uur2id", value: "uur2", label: "Incorrect information or sample code" },
        { id: "uur3id", value: "uur3", label: "Missing the information/samples I need" },
        { id: "uur4id", value: "uur4", label: "Other" }
      ];
      submitUnuseful = function (event, data) {
        console.log("submitunUseful");
        console.log(data);
        console.log(event);
        console.log("submit reason fot choice unuseful: " + data.unusefulReason());
        document.getElementById("unusefulDialog").close();
      }
      //screenshot
      this.isScreenshotMode = ko.observable(false);
      this.isScreenshot = ko.observableArray();
      this.isScreenshot.subscribe((newVal) => {
        if (newVal.indexOf('yes') > -1) {
          let imageTag = document.createElement("img");
          imageTag.id = "result-image";
          document.getElementById("result-image-div").appendChild(imageTag);
          $("#result-image").attr('src', this.img).show();
          document.getElementById("result-image").style.width = "650px";
          document.getElementById("result-image").style.height = "500px";             
        }
        else {
          document.getElementById("result-image").remove();
        }
      }, this)
      this.feedbackDesc = ko.observable();
      selectScreenShotMode = function (e, d) {
        d.isScreenshotMode(true);
        document.getElementById("content").addEventListener("click", function (event) {
          console.log(event);
          if ($(event.target).hasClass("highlight")) {
            //event.target.style.border = "none";
            $(event.target).removeClass("highlight");
          }
          else if (d.isScreenshotMode()) {
            //event.target.style.border = "3px solid yellow";
            $(event.target).addClass("highlight")
          }
        });
        document.getElementById("result-image").remove();
        document.getElementById("feedbackDialog").close();
      }
      unSelectScreenShotMode = function (e, d) {
        d.isScreenshotMode(false);
        document.getElementById("content").removeEventListener("click", function () { });
      }
      this.img = "";
      takeScreenshot = function (event, data) {
        console.log(event);
        console.log(data);
        html2canvas(document.body, {
          onrendered: function (canvas) {
            data.img = canvas.toDataURL();
            // reopen of dialog
            if (data.isScreenshot().indexOf("yes") > -1) {
              
              if (!(document.getElementById("result-image") != undefined && document.getElementById("result-image") != null)) {
                let imageTag = document.createElement("img");
                imageTag.id = "result-image";
                document.getElementById("result-image-div").appendChild(imageTag);
              }
              $("#result-image").attr('src', data.img).show();
              document.getElementById("result-image").style.width = "650px";
              document.getElementById("result-image").style.height = "500px";
              
            }
            //reopen of dialog
          }
        });
        setTimeout(function() {
          document.getElementById("feedbackDialog").open();
        },1000);
      }
      closeFeedbackDialog = function (event, data) {
        document.getElementById("feedbackDialog").close();
        data.isScreenshotMode(false);
        $(".highlight").removeClass("highlight");
      }
      submitFeedback = function (event, data) {
        console.log(data.feedbackDesc() + " is submitted");
        closeFeedbackDialog(event, data);
        $(".highlight").removeClass("highlight");
      }
      

    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return IncidentsViewModel;
  }
);
