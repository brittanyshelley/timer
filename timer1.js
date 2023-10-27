const timerArr = process.argv.slice(2);

const alarm = () => {
  process.stdout.write("\x07");
};

const alarmTimer = element => {
  let startCheck = Number(element) >= 0 && !Number.isNaN(element);
  if (startCheck) {
    let delay = Number(element * 1000);
    setTimeout(alarm, delay);
  }
};

for (element of timerArr) {
  alarmTimer(element);
}