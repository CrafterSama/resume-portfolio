import { useEffect, useState } from 'react';
import Image from 'next/image';
import rocketSVG from '../../assets/images/rocket.svg';

import TopCloud from '../common/Clouds/TopCloud';
import { Profiles, SupabaseResponseProps } from 'src/types/modules';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Database } from 'src/types/supabase';
import { toast } from 'sonner';
import { useGetImageProfile, useGetProfile } from 'src/services/use-profile';
import avatarDefault from '../../assets/images/new-avatar.jpg';

const Hero = ({ session }) => {
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState<boolean>(false);
  /*const [profile, setProfile] = useState<Profiles>(null);*/
  const { data: profile } = useGetProfile();
  const { data: avatarUrl } = useGetImageProfile({ path: profile?.avatar_url });
  //const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url']>('');

  useEffect(() => {
    const headerBgOne = document.getElementById('bigHeaderOne');
    const headerBgTwo = document.getElementById('bigHeaderTwo');
    const timer = setTimeout(() => {
      headerBgOne?.classList.remove('fadeInRightLarge');
      headerBgTwo?.classList.remove('fadeInLeftLarge');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header id="about-me" className="hero">
      <div id="bigHeaderOne" className="middle-bg-one animated fadeInRightLarge"></div>
      <div id="bigHeaderTwo" className="middle-bg-two animated fadeInLeftLarge"></div>
      <div className="header-body text-center w-full">
        <figure className="about-picture animated fadeInUp delay-800ms w-64 h-64 rounded-full">
          <Image
            className="picture-profile w-64 h-64 rounded-full object-cover"
            src={avatarUrl || avatarDefault}
            alt={`${profile?.name} ${profile?.last_name}`}
            width={250}
            height={250}
          />
        </figure>
        <h1 className="header-title animated fadeInUp delay-1s font-semibold text-3xl">{`${profile?.name} ${profile?.last_name}`}</h1>
        <div className="hero-body text-left">
          <div className="floating-description animated fadeInDown">
            <div className="subtitle-hero animated float slow-motion space-y-4">
              <h2 className="subtitle animated fadeInUp delay-600ms text-2xl">{profile?.position}</h2>
              <p className="animated fadeInDown delay-1s text-gray-200">{profile?.about}</p>
              <div className="subtitle-rocket animated fadeInDownRotate delay-1s">
                <Image
                  className="rocket animated slower infinite floatingRocket"
                  src={rocketSVG}
                  alt="Rocket"
                  width={150}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <TopCloud />
      </div>
    </header>
  );
};

export default Hero;
