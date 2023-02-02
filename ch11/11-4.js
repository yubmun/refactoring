export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.dayTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low && range.top <= this._temperatureRange.high
    );
  }
}
