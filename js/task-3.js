const profile = {
  username: 'Jacob',
  playTime: 300,

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },

  changeUsername(newName) {
    if (profile.username === this.username) {
      profile.username = newName;
    }
  },

  updatePlayTime(hours) {
    if (profile.username === this.username) {
      profile.playTime += hours;
    }
  },
};

console.log(profile.getInfo());

console.log(profile.changeUsername('Marco'));
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
