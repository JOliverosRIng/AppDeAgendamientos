import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { events } from "../data/events";

function CalendarView({
  events,
}) {

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}

        initialView="timeGridWeek"

        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}

        events={events}

        editable={true}

        selectable={true}

        height="auto"
      />

    </div>
  );
}

export default CalendarView;