# README

```bash
yarn && yarn dev
```

## Home

[28 oct 2022 at 17:08:25]: http://wcfi.wii.camp/v1.0/teams

- Ảnh FE tự lấy theo tokenType
- Số lượng mint: trường totalMinted
- Tổng số tiền: trường totalPool

```
Steven Ha 10x, [28 Oct 2022 at 17:48:32]:
Cai participant BE đếm đó

Tổng ng đang sỡ hữu nft

Cái reward FE gọi SC
```

## REFFERAL PAGE

API Phần ref:

1. Get Commission: http://wcfi.wii.camp/v1.0/refs/commission?address=0x44c42e632d4d95050e709358ca7c2bdbafc5da82
2. Get Commission History: http://wcfi.wii.camp/v1.0/refs/commission-histories?address=0x44c42e632d4d95050e709358ca7c2bdbafc5da82

- Node: address là địa chỉ ví của người dùng

## NHỮNG TÍNH NĂNG CÒN LẠI:

1. Asset Page: FE + BE

- Click NFT -> NFT Detail -> Click "Sell Button": => Sell NFT Modal
  -> Click APPROVE:
  Input: PRICE + ...
  -> Click SELL

  => The Listing NFT Items amount will be change

2. Asset PAGE - Filter Item: Filter by FE

3. Referral Page: BE + FE
   Home Page - Right Side Bar: My Referral Link Component
   Referal Page: (đã có api)
   . Get Commission ...
   . Get Commission History..

4. Home Page: Sau khi Mint NFT => Lấy data của NFT ở đâu để hiện thị lên cáo Modal Detail

5. Market Place: BE + FE
   - api get List Items
     ...

## Hình ảnh

- [web nén hình](https://imagecompressor.com/)
- [có tính phí & tốt hơn](https://tinypng.com/)
- tự cài photoshop
- [đọc thêm](https://www.wpbeginner.com/beginners-guide/speed-wordpress-save-images-optimized-web/)
- hiện tại BE vẫn trả ra theo dạng số => FE dùng tên cho dễ nhớ

## Data mẫu

Data mẫu:

1. https://wcfi.wii.camp/v1.0/refs/commission?address=0xEAd9F306BC8705FD8d77F6B9E3B4aFf466280BDA
2. https://wcfi.wii.camp/v1.0/refs/commission-histories?address=0xEAd9F306BC8705FD8d77F6B9E3B4aFf466280BDA

```json
// 20221031083223
// https://wcfi.wii.camp/v1.0/refs/commission?address=0xEAd9F306BC8705FD8d77F6B9E3B4aFf466280BDA

{
  "code": 200,
  "payload": {
    "address": "0xead9f306bc8705fd8d77f6b9e3b4aff466280bda",
    "commission": 15,
    "totalRefs": 1
  }
}
```

```json
// 20221031083240
// https://wcfi.wii.camp/v1.0/refs/commission-histories?address=0xEAd9F306BC8705FD8d77F6B9E3B4aFf466280BDA

{
  "code": 200,
  "payload": [
    {
      "createdAt": "1667138281",
      "downLine": "0x44c42e632d4d95050e709358ca7c2bdbafc5da82",
      "commission": 5
    },
    {
      "createdAt": "1667138281",
      "downLine": "0x44c42e632d4d95050e709358ca7c2bdbafc5da82",
      "commission": 5
    },
    {
      "createdAt": "1667138275",
      "downLine": "0x44c42e632d4d95050e709358ca7c2bdbafc5da82",
      "commission": 5
    }
  ]
}
```

## Marketplace

```
1. API cũ nào mà có phân trang thì a thêm ?page=1&limit=1 vào sau a nhé (page: trang, limit: giới hạn mỗi trang)
2. API Lấy danh sách nft trên marketplace: https://wcfi.wii.camp/v1.0/nfts/market?seller=0x44c42e632d4d95050e709358ca7c2bdbafc5da82&page=1&limit=1
3. API chi tiết nft:
https://wcfi.wii.camp/v1.0/nfts/:tokenId
Sample: https://wcfi.wii.camp/v1.0/nfts/32
4. API lịch sử nft:
https://wcfi.wii.camp/v1.0/nfts/:tokenId/histories?page=1&limit=1
Sample: https://wcfi.wii.camp/v1.0/nfts/32/histories?page=1&limit=1
* Notes: type có 4 loại: TRANSFER, SEELING, CANCEL_SELLING, SOLD
```

```
x - 1. API cũ nào mà có phân trang thì a thêm ?page=1&limit=1 vào sau a nhé (page: trang, limit: giới hạn mỗi trang)
x - 2. API Lấy thông tin reward với participant ở home page: https://wcfi.wii.camp/v1.0/summary
x - 3. API Lấy danh sách nft trên marketplace: https://wcfi.wii.camp/v1.0/nfts/market?seller=0x44c42e632d4d95050e709358ca7c2bdbafc5da82&page=1&limit=1
/ 4. API chi tiết nft:
https://wcfi.wii.camp/v1.0/nfts/:tokenId
Sample: https://wcfi.wii.camp/v1.0/nfts/32
5. API lịch sử nft:
https://wcfi.wii.camp/v1.0/nfts/:tokenId/histories?page=1&limit=1
Sample: https://wcfi.wii.camp/v1.0/nfts/32/histories?page=1&limit=1
* Notes: type có 4 loại: TRANSFER, SEELING, CANCEL_SELLING, SOLD
```

2. Summary

```json
{
  "code": 200,
  "payload": {
    "totalReward": 2760,
    "participants": 6
  }
}
```

3. Marketplace

link
https://wcfi.wii.camp/v1.0/nfts/market?seller=0x44c42e632d4d95050e709358ca7c2bdbafc5da82&page=1&limit=1

```json
// 20221101090135
// https://wcfi.wii.camp/v1.0/nfts/market?seller=0x44c42e632d4d95050e709358ca7c2bdbafc5da82&page=1&limit=1

{
  "code": 200,
  "payload": [
    {
      "id": "0x9661c17e619698eb92fdede81b4c19e7a2066090-32",
      "tokenId": "32",
      "tokenAddress": "0x9661c17e619698eb92fdede81b4c19e7a2066090",
      "tokenType": "2",
      "image": "https://wcfi.wii.camp/public/images/teams/2.png",
      "owner": "0x4b4f716c79aa0c262f0290a776f4248a2b6fb0fc",
      "isOnSale": true,
      "seller": "0x44c42e632d4d95050e709358ca7c2bdbafc5da82",
      "listingId": "3",
      "price": "20000000000000000",
      "creator": "0x44c42e632d4d95050e709358ca7c2bdbafc5da82",
      "createdAt": "1667138281"
    }
  ]
}
```

```ts
interface NFT {
  id: string
  tokenId: string
  tokenAddress: string
  tokenType: string
  image: string
  owner: string
  isOnSale: boolean
  seller: string
  listingId: string
  price: string
  creator: string
  createdAt: string
}
```

X 4. API chi tiết nft:
https://wcfi.wii.camp/v1.0/nfts/:tokenId
Sample: https://wcfi.wii.camp/v1.0/nfts/32

```json
// 20221101235741
// https://wcfi.wii.camp/v1.0/nfts/32

{
  "code": 200,
  "payload": {
    "id": "0x9661c17e619698eb92fdede81b4c19e7a2066090-32",
    "tokenId": "32",
    "tokenAddress": "0x9661c17e619698eb92fdede81b4c19e7a2066090",
    "tokenType": "2",
    "image": "https://wcfi.wii.camp/public/images/teams/2.png",
    "owner": "0x4b4f716c79aa0c262f0290a776f4248a2b6fb0fc",
    "isOnSale": true,
    "listingId": "3",
    "price": "20000000000000000",
    "creator": "0x44c42e632d4d95050e709358ca7c2bdbafc5da82",
    "createdAt": "1667138281"
  }
}
```

1. Marketplace: https://wcfi.wii.camp/v1.0/nfts/market?page=1&limit=20
2. All assets: https://wcfi.wii.camp/v1.0/nfts/?owner=0x4b4f716c79aa0c262f0290a776f4248a2b6fb0fc&page=1&limit=20
3. Listing: https://wcfi.wii.camp/v1.0/nfts/market?seller=0x44c42e632d4d95050e709358ca7c2bdbafc5da82&page=1&limit=20
