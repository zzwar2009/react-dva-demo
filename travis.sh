#!/bin/bash
CUR_SHA=`git rev-parse HEAD`
CUR_TAG=`git tag --points-at $CUR_SHA`
echo $CUR_TAG
if [ $CUR_TAG ] && [ "$CUR_TAG"x != ""x ]; then
    echo ''
    echo '[is a tag] start packing'
    echo 'packing......'
    
    rm -r ./$CUR_TAG
    mkdir $CUR_TAG

    rm -r ./build
    rm *.zip


    npm run build
    cd build
    cp -r *.css *.jpg *.png *.js *.html  ../$CUR_TAG

    cd ..
    zip -r $CUR_TAG.zip $CUR_TAG
    pwd
    curl -v  -F r=releases  -F hasPom=false  -F e=zip  -F g=com.easemob.kefu.fe.rs  -F a=kefu-fe-emticket-mgt -F v=$CUR_TAG  -F p=zip  -F 'file=@'$CUR_TAG'.zip'  -u ci-deploy:Xyc-R5c-SdS-2Qr http://hk.nexus.op.easemob.com/nexus/service/local/artifact/maven/content
else
    echo ''
    echo '[not a tag] exit packing.'
fi

