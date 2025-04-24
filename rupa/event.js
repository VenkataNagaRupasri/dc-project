// event.js
// Loads event data from Firebase and places the AR event marker at the correct GPS location,


import { getEventByTitle } from "./fetch-event.js";

document.addEventListener("DOMContentLoaded", async function () {
  const scene = document.querySelector("a-scene");
  if (!scene) {
    console.error("Scene element not found.");
    return;
  }

  console.log("Scene loaded. Preparing event placement...");

  const elementEvent = document.getElementById("event");
  const infoDisplay = document.getElementById("display-info-text");

  if (!elementEvent) {
    console.error("Event entity with ID 'event' not found.");
    return;
  }

  // Apply fallback geometry and material if not already set
  elementEvent.setAttribute("geometry", {
    primitive: "box",
    width: 8,
    height: 8,
    depth: 8
  });

  elementEvent.setAttribute("material", {
    color: "#3B82F6",
    opacity: 0.9
  });

  // Define the title of the event to fetch from Firebase
  const eventTitle = "Some Class";

  try {
    const event = await getEventByTitle(eventTitle);

    if (!event || !event.eventGeo || !event.eventGeo.latitude || !event.eventGeo.longitude) {
      console.warn(`Event "${eventTitle}" not found or missing coordinates.`);
      elementEvent.setAttribute("visible", false);
      if (infoDisplay) {
        infoDisplay.setAttribute("value", `Event "${eventTitle}" not found or missing location.`);
      }
      return;
    }

    // Set GPS coordinates on the entity
    elementEvent.setAttribute("gps-new-entity-place", {
      latitude: parseFloat(event.eventGeo.latitude),
      longitude: parseFloat(event.eventGeo.longitude)
    });

    console.log("Event placed at GPS coordinates:", event.eventGeo);

    // Format timestamp safely
    let formattedTime = "Unavailable";
    if (event.eventTime && typeof event.eventTime.toDate === "function") {
      formattedTime = event.eventTime.toDate().toLocaleString();
    }

    // Populate display panel with event data
    if (infoDisplay) {
      infoDisplay.setAttribute(
        "value",
        `Name: ${event.eventName}\nBldg: ${event.eventBldg}\nRoom: ${event.eventRm}\nTime: ${formattedTime}`
      );
    }

    elementEvent.setAttribute("visible", true);
  } catch (error) {
    console.error("Error retrieving event data:", error);
    if (infoDisplay) {
      infoDisplay.setAttribute("value", "Failed to load event data.");
    }
  }
});
