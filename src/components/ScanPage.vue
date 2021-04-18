<template>
  <div class="scan-page">
    <div class="content">
      <div class="video-container">
        <video id="video" width="480" height="640" autoplay></video>
      </div>
      <div class="top-content top-icons icon-group">
        <img class="icon-button" src="../assets/close.svg" />
        <img class="icon-button" src="../assets/more.svg">
      </div>
      <div class="bottom-content">
        <div class="tip">扫二维码 / 条码 / 小程序码</div>
        <div class="bottom-icons icon-group">
          <img class="icon-button" src="../assets/qr-icon.svg" />
          <img class="icon-button" src="../assets/album.svg">
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="tab-name">扫码</div>
      <div class="tab-name">识物</div>
      <div class="tab-name">翻译</div>
    </div>
  </div>
</template>

<script>
function setupVideo(video = new HTMLVideoElement()) {
  return new Promise((resolve, reject) => {
    const ifReject = () => {
      reject();
    };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      let hint = {
        facingMode: { ideal: "environment" },
        audio: false,
        video: {
          width: { ideal: 480 },
          height: { ideal: 640 },
        },
      };

      navigator.mediaDevices
        .getUserMedia({ video: hint })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
          video.addEventListener("loadedmetadata", function () {
            resolve();
          });
        })
        .catch((err) => ifReject(err));
    } else {
      ifReject();
    }
  });
}

export default {
  mounted () {
    const video = document.getElementById("video")
    setupVideo(video).then(() => {
      setTimeout(() => {
        this.$router.replace('./login')
      }, 1000)
    }).catch(() => {
      alert("打开摄像头出错！")
    })
  }
}
</script>

<style lang="less" scoped>
.scan-page {
  height: 100vh;
  width: 100vw;
  background: rgb(12, 12, 12);
  color: white;
  font-weight: bolder;

  .content {
    background: rgba(255, 255, 255, .5);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    position: relative;

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 0;
    }

    .top-content,
    .bottom-content {
      width: 100%;
      z-index: 1;
    }

    .tip {
      text-align: center;
      margin: 40px;
    }

    .icon-group {
      display: flex;
      justify-content: space-between;

      .icon-button {
        height: 20px;
        width: 20px;
      }
    }

    .bottom-icons {
      .icon-button {
        height: 50px;
        width: 50px;
        background: rgba(0, 0, 0, 0.2);
        padding: 15px;
        border-radius: 50px;
      }
    }
  }

  .tab {
    display: flex;
    justify-content: center;
    font-size: 16px;

    .tab-name {
      margin: 20px 15px;
      opacity: .5;

      &:first-child {
        opacity: 1;

        &:after {
          content: '';
          height: 5px;
          width: 5px;
          border-radius: 5px;
          background: white;
          display: block;
          margin: auto;
          margin-top: 10px;
        }
      }
    }
  }
}

#video {
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>