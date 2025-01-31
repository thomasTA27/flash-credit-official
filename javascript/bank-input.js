	
class PopupManager {
    constructor() {
        this.popup = null;
        this.popupTimer = null;
    }

    openPopup(url, width = 800, height = 600) {
        // Calculate center position for the popup
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;

        // Open popup
        if (!this.popup || this.popup.closed) {
            this.popup = window.open(url, "YouTubePopup", `width=${width},height=${height},left=${left},top=${top}`);
            
            // Start monitoring the popup
            this.startMonitoring();
        } else {
            this.popup.focus(); // Bring existing window to the front
        }

        // Handle popup blocked
        if (!this.popup) {
            console.error("Popup was blocked by the browser");
            return;
        }
    }

    startMonitoring() {
        this.popupTimer = setInterval(() => {
            try {
                // Check if popup is closed
                if (!this.popup || this.popup.closed) {
                    console.log("Popup was closed by the user bye");
                    this.cleanup();
                    return;
                }

                console.log("Popup is still open hi hi ");



				// const currentUrl = this.popup.location.href;

				// console.log( "this is "+ currentUrl)
	  
		
				// if (currentUrl.includes("targetUrl")) {
				//   // Close popup
				//   console.log("Popup was successfully closed");
				//   this.popup.close();
				//   this.cleanup();
				// }


			
            } catch (error) {
                // Cross-origin errors will occur while the popup is on another domain
                // This is normal and we should continue monitoring
                if (!error.message.includes("cross-origin")) {
                    this.cleanup();
                    console.error("Error monitoring popup:", error);
                }
            }
        }, 1000); // Check every 1 second
    }

    cleanup() {
        // Clear the monitoring timer
        if (this.popupTimer) {
            clearInterval(this.popupTimer);
            this.popupTimer = null;
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {




// Create an instance of the popup manager
const popupManager = new PopupManager();

// Add click event listener to the button
document.getElementById("test").addEventListener("click", () => {
    popupManager.openPopup("https://docs.google.com/document/u/0/");
});

   


});

