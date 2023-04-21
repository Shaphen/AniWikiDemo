## AniWiki
Experimental React Native Mobile App for sharing previous, current, and upcoming anime.

### Running App Locally
- Navigate to base directory
- Open Terminal
- run `npx react-native run-android`
  - mobile USB connected device: `npx react-native run-android -- --gradle-version 7.5.1`
- Open Android Studio
- Navigate to Device Manager
- Start one of your mobile emulators

- Note: When running `./gradlew` terminal output is poopy. A temp fix to this is to set term to cygwin - `TERM=cygwin ./gradlew`
  - Recommended to set an alias for extra convenience as I have for my windows machine
  `alias gradlew='TERM=cygwin ./gradlew'`
  - This way after naviating to /android firectory, only need to run gradlew in terminal
