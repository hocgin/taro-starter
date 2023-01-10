import {storageKit} from "@hocgin/taro-kit";

export class StorageKit {
  static work() {
    storageKit.getStorageSync('test');
  }

}
