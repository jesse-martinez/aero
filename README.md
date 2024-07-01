# Aero Aircraft Scheduling

## Overview

This is a web application built with React, TypeScript, Tailwind CSS, and Framer Motion.

The application allows users to schedule a rotation for an aircraft and view its usage as a percentage and as a timeline.

Users select an aircraft and an initial flight. The sidebar will then update with compatible flights that the aircraft can take based on three rules:

- All aircraft must be on the ground at midnight.
- 20-minute minimum turnaround time.
- Aircraft cannot "teleport" and must operate a flight for any movement; empty aircraft are too costly!

For the timeline, scheduled service is shown in green, turnaround time in purple, and idle time in grey.

## How to run

```sh
npm install
```
```sh
npm run dev
```

## Things to add
- Drag and drop functionality
- Removing intermediate flights
- More error handling during fetch
- Date picker to jump to a specific date to schedule flights
- Streaming data using React Suspense to show skeletons of aircrafts and flights while fetching
- Responsive
- Accessibility
- More instructions