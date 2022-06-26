import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import { Styles } from './assets/designs/styles.js';
import { Post, Post1 } from './components/post';
// You can import from local files
export default function App() {
  

  return (
    <ScrollView>
      <View style={{ marginTop: 30 }}>
        <View style={[Styles.img, { justifyContent: 'space-between' }]}>
          <Text style={Styles.facebookText}>facebook</Text>
          <View style={Styles.img}>
            <Image
              source={require('./assets/photos/search.png')}
              style={[Styles.imageEditz, { marginRight: 10 }]}
            />
            <Image
              source={require('./assets/photos/messenger.png')}
              style={Styles.imageEditz}
            />
          </View>
        </View>
        <View style={Styles.sixImg}>
          <Image
            source={require('./assets/photos/home.png')}
            style={[
              Styles.imageEditz,
              { borderBottomWidth: 3, borderBottomColor: 'blue' },
            ]}
          />
          <Image
            source={require('./assets/photos/users.png')}
            style={Styles.imageEditz}
          />
          <Image
            source={require('./assets/photos/video.png')}
            style={Styles.imageEditz}
          />
          <Image
            source={require('./assets/photos/user.png')}
            style={Styles.imageEditz}
          />
          <Image
            source={require('./assets/photos/notification.png')}
            style={Styles.imageEditz}
          />
          <Image
            source={require('./assets/photos/menu.png')}
            style={Styles.imageEditz}
          />
        </View>
        <View style={Styles.thirdPicLayer}>
          <View>
            <Image
              source={require('./assets/photos/status3.jpg')}
              style={Styles.diffImageEditz}
            />
            <View style={{ marginBottom: 0 }}>
              <TextInput
                placeholder="What's on your mind?"
                placeholderTextColor="black"
                style={Styles.appInput}
              />
            </View>
          </View>

          <View>
            <Image
              source={require('./assets/photos/picture.png')}
              style={Styles.imageEditz}
            />
          </View>
        </View>

        <View style={Styles.status}>
          <Text style={{ borderBottomWidth: 2, borderBottomColor: 'blue' }}>
            Stories
          </Text>
          <Text>Reels</Text>
          <Text>Rooms</Text>
        </View>

        <View style={Styles.statusPanel}>
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={Styles.statusPostHolder}
            source={require('./assets/photos/dad.jpg')}>
            <Image
              style={Styles.profilePix}
              source={require('./assets/photos/user1.jpg')}
            />
            <Text style={Styles.profileText}>Vitalis Orugbo</Text>
          </ImageBackground>
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={Styles.statusPostHolder}
            source={require('./assets/photos/status2.jpg')}>
            <Image
              style={Styles.profilePix}
              source={require('./assets/photos/user2.jpg')}
            />
            <Text style={Styles.profileText}>Elon Musk</Text>
          </ImageBackground>
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={Styles.statusPostHolder}
            source={require('./assets/photos/status3.jpg')}>
            <Image
              style={Styles.profilePix}
              source={require('./assets/photos/user3.jpg')}
            />
            <Text style={Styles.profileText}>Mark Zuckerberg</Text>
          </ImageBackground>
          <ImageBackground
            imageStyle={{ borderRadius: 10 }}
            style={Styles.statusPostHolder}
            source={require('./assets/photos/user4.jpg')}>
            <Image
              style={Styles.profilePix}
              source={require('./assets/photos/status1.jpg')}
            />
            <Text style={Styles.profileText}>Bill Gates</Text>
          </ImageBackground>
        </View>

        <Post />
        <View style={Styles.overall}>
          <View style={Styles.secondLayer}>
            <View style={Styles.smallEmoji}>
              <Image
                source={require('./assets/like(1).png')}
                style={{ height: 20, width: 20, marginRight: -2 }}
              />
              <Image
                source={require('./heart.png')}
                style={{ height: 20, width: 20 }}
              />
            </View>
            <View>
              <Text> Ronaldo and 896 others </Text>
            </View>
          </View>
          <View>
            <Text>112 comments</Text>
          </View>
        </View>
        <View style={Styles.line1}></View>
        <View style={Styles.lowerLikeArea}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./like.png')}
              style={{ height: 20, width: 20 }}
            />
            <Text> Like</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./comment.png')}
              style={{ height: 20, width: 20 }}
            />
            <Text> Comment</Text>
          </View>
        </View>
        <View style={Styles.line1}></View>
        <View>
          <View style={Styles.textStuff}>
            <View>
              <Text style={{ marginLeft: 10 }}>View previous comments</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text>Most relevant</Text>
              <Image
                source={require('./assets/photos/messenger.png')}
                style={{ height: 15, width: 15, marginTop: 3.5, marginLeft: 3 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Image
                source={require('./girl.jpg')}
                style={Styles.diffImageEditz}
              />
            </View>
            <View style={Styles.emptyBottomView}>
              <Text style={{ fontWeight: 'bold', fontSize: 11, marginTop: 3 }}>
                {' '}
                Uzochukwu Ogbonna
              </Text>
              <Text style={{ marginTop: 3 }}> What a stadium! </Text>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Image
              source={require('./man.jpg')}
              style={Styles.diffImageEditz}
            />
            <View style={{ marginBottom: 0 }}>
              <TextInput
                placeholder="Write a comment..."
                placeholderTextColor="black"
                style={Styles.appInput2}
              />
            </View>
          </View>
        </View>
        <Post1 />
        <View style={Styles.overall}>
          <View style={Styles.secondLayer}>
            <View style={Styles.smallEmoji}>
              <Image
                source={require('./assets/like(1).png')}
                style={{ height: 20, width: 20, marginRight: -2 }}
              />
              <Image
                source={require('./heart.png')}
                style={{ height: 20, width: 20 }}
              />
            </View>
            <View>
              <Text> Victoria Ogbonna and 567 others </Text>
            </View>
          </View>
          <View>
            <Text>112 comments</Text>
          </View>
        </View>
        <View style={Styles.line1}></View>
        <View style={Styles.lowerLikeArea}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./like.png')}
              style={{ height: 20, width: 20 }}
            />
            <Text> Like</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./comment.png')}
              style={{ height: 20, width: 20 }}
            />
            <Text> Comment</Text>
          </View>
        </View>
        <View style={Styles.line1}></View>
        <View>
          <View style={Styles.textStuff}>
            <View>
              <Text style={{ marginLeft: 10 }}>View previous comments</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text>Most relevant</Text>
              <Image
                source={require('./assets/photos/messenger.png')}
                style={{ height: 15, width: 15, marginTop: 3.5, marginLeft: 3 }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Image
                source={require('./new1.jpg')}
                style={Styles.diffImageEditz}
              />
            </View>
            <View style={Styles.emptyBottomView}>
              <Text style={{ fontWeight: 'bold', fontSize: 11, marginTop: 3 }}>
                {' '}
                Vitalis Orugbo
              </Text>
              <Text style={{ marginTop: 3 }}> Cute pic</Text>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Image
              source={require('./new2.jpg')}
              style={Styles.diffImageEditz}
            />
            <View style={{ marginBottom: 0 }}>
              <TextInput
                placeholder="Write a comment..."
                placeholderTextColor="black"
                style={Styles.appInput2}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
