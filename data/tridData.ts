const tripData = [
    {id: 1, description: '6/1/24. Breakfast run to Applegreen, Coynes Cross off N11'},
    {id: 2, description: '5/2/24. Breakfast run to Bracken’s Bar, Kinnegad'},
    {id: 3, description: '24/2/24. Faughart Hill, Dundalk (St.Bridget’s Shrine & 12th Century Church & Graveyard)'},
    {id: 4, description: '13/4/24. Spin around Wicklow'},
    {id: 5, description: '20/4/24. Corlea Bog Trackway, Longford'},
    {id: 6, description: '27/4/24. Cathole Falls & Ridge of Capard & Emo House'},
    {id: 7, description: '11/5/24. Wellington Tower Monument, Tullaroan, Kilkenny'},
    {id: 8, description: '18/5/24. Wicklow Mountains'},
    {id: 9, description: '1/6/24. Meelick Weir Walkway, Offaly/Galway'},
    {id: 10, description: '8/6/24. Killann Old Church & Graveyard, Bailieboro, Cavan'},
    {id: 11, description: '22/6/24. Leap Castle & Seir Kieran, Offaly'},
    {id: 12, description: '30/6/24. Kilranelagh Graveyard/Dwyer McAllister Cottage'},
    {id: 13, description: '28/7/24. Monasterboice & Old Melifont Abbey, Louth'},
    {id: 14, description: '3/8/24. Altamont Gardens & Huntington Castle, Wicklow'},
    {id: 15, description: '10/8/24. Kells Priory, Kilkenny'},
    {id: 16, description: '17/8/24. Borris House, Carlow'},
    {id: 17, description: '24/8/24 Rathcline Castle, Lanesboro & Barley Harbour'},
    {id: 18, description: '31/8/24. Ballaghmore Castle, Borris-in-Ossary'},
    {id: 19, description: '7/9/24. Sliabh Gullian Mountain Drive, Co. Down'},
    {id: 20, description: '14/9/24. Ferns Castle, Wexford'},
    {id: 21, description: '21/9/24. Derryglad Folk Museum, Athlone'},
    {id: 22, description: '28/9/24. Dromod Railway Museum, Longford'},
    {id: 23, description: '12/10/24. Rathgall Hillfort & Athgowle Church, Carlow'},
    {id: 24, description: '19/10/24. Cooley Point & Greenore, Carlingford'},
    {id: 25, description: '26/10/24. The Wicklow Way'},
    {id: 26, description: '2/11/24. Abbeyshrule Aquaduct & Abbey'},
    {id: 27, description: '9/11/24. Fore Abbey, Westmeath'},
]

const newTrips = [
     {id: 1, description: 'New Venues'},
     {id: 2, description: 'The Caves of Kesh – Sligo'},
     {id: 3, description: 'Athenry Castle, Galway'},
     {id: 4, description: 'Eagles Rock – Leitrim'},
     {id: 5, description: 'Tintern Abbey, Wexford'},
     {id: 6, description: 'Foynes Flying Boat Museum – Limerick'},
     {id: 7, description: 'Cuilcagh - Fermanagh'},
     {id: 8, description: 'Copper Steeple, Ballingarry - Tipperary'},
     {id: 9, description: 'Kilmokea Gardens - Wexford'},
     {id: 10, description: 'Repeat Venues'},
     {id: 11, description: 'Cliffs of Magho, Enniskillen'},
     {id: 12, description: 'Laragh Tin Church, Monaghan'},
     {id: 13, description: 'Athlone Castle'},
     {id: 14, description: 'Heywood Gardens, Laois'},
     {id: 15, description: 'Castle Roche, Dundalk'},
     {id: 16, description: 'Oriel Pier, Clogherhead'}
]

import annualPic1 from '@/public/images/2024/Newtownmountkennedy.jpg'
import annualPic2 from '@/public/images/2024/Watsons Cafe.jpg'
import annualPic3 from '@/public/images/2024/1798.jpg'
import annualPic4 from '@/public/images/2024/RDS.jpg'
import annualPic5 from '@/public/images/2024/Hill.jpg'
import annualPic6 from '@/public/images/2024/Lullymore.jpg'
import annualPic7 from '@/public/images/2024/EMO.jpg'
import annualPic8 from '@/public/images/2024/Corlea.jpg'
import annualPic9 from '@/public/images/2024/USFolk.jpg'

const annualPics = [
    {id: 1, loc: annualPic1},
    {id: 2, loc: annualPic2},
    {id: 3, loc: annualPic3},
    {id: 4, loc: annualPic4},
    {id: 5, loc: annualPic5},
    {id: 6, loc: annualPic6},
    {id: 7, loc: annualPic7},
    {id: 8, loc: annualPic8},
    {id: 9, loc: annualPic9},
]

import visitedPic1 from '@/public/images/2024/Abbeyshrule.jpg'
import visitedPic2 from '@/public/images/2024/Aghowle.jpg'
import visitedPic3 from '@/public/images/2024/Ballaghmore.jpg'
import visitedPic4 from '@/public/images/2024/Huntington.jpg'
import visitedPic5 from '@/public/images/2024/Borris.jpg'
import visitedPic6 from '@/public/images/2024/Corlea.jpg'
import visitedPic7 from '@/public/images/2024/Ridge.jpg'
import visitedPic8 from '@/public/images/2024/Dromod.jpg'
import visitedPic9 from '@/public/images/2024/Killann1.jpg'
import visitedPic10 from '@/public/images/2024/Meelick.jpg'
import visitedPic11 from '@/public/images/2024/Faughart.jpg'
import visitedPic12 from '@/public/images/2024/Leap.jpg'
import visitedPic13 from '@/public/images/2024/Gullian.jpg'

const visitedPics = [
    {id: 1, loc: visitedPic1, desc: 'Abbeyshrule Abbey'},
    {id: 2, loc: visitedPic2, desc: 'Aghowle Church'},
    {id: 3, loc: visitedPic3, desc: 'Ballaghmore Castle'},
    {id: 4, loc: visitedPic4, desc: 'Huntington Castle'},
    {id: 5, loc: visitedPic5, desc: 'Borris House'},
    {id: 6, loc: visitedPic6, desc: 'Corlea Bog Trackway'},
    {id: 7, loc: visitedPic7, desc: 'Ridge of Capard, Sliabh Blooms'},
    {id: 8, loc: visitedPic8, desc: 'Dromod Railway Museum'},
    {id: 9, loc: visitedPic9, desc: 'Killann Old Church, Bailieboro’, Co.Cavan'},
    {id: 10, loc: visitedPic10, desc: 'Meelick Weir Walkway'},
    {id: 11, loc: visitedPic11, desc: 'Faughart Hill, Dundalk'},
    {id: 12, loc: visitedPic12, desc: 'Leap Castle'},
    {id: 13, loc: visitedPic13, desc: 'Sliabh Gullian Drive'},
]

export {tripData, newTrips, annualPics, visitedPics}